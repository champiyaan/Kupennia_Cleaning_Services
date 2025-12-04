# Deployment Guide

This guide explains how to deploy the Kupennia Cleaning Services website to your production server using GitHub Actions.

## Prerequisites

1. **Server Setup**
   - Ubuntu/Debian server with Node.js 18+ installed
   - PM2 installed globally: `npm install -g pm2`
   - SSH access configured
   - Port 3000 (or your chosen port) open in firewall

2. **GitHub Secrets Configuration**
   
   Go to your GitHub repository → Settings → Secrets and variables → Actions, and add the following secrets:

   - `SSH_HOST`: Your server IP address (e.g., `72.61.206.211`)
   - `SSH_USER`: SSH username (e.g., `root`)
   - `SSH_PASSWORD`: Your SSH password

## Server Setup Steps

### 1. Initial Server Configuration

SSH into your server and run:

```bash
# Install Node.js 18 (if not already installed)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Create deployment directory
sudo mkdir -p /root/kupennia-cleaning
sudo mkdir -p /root/kupennia-cleaning/logs

# Set up PM2 to start on boot
pm2 startup
# Follow the instructions shown to enable PM2 on system startup
```

### 2. Environment Variables

Create a `.env.local` file on your server:

```bash
cd /root/kupennia-cleaning
nano .env.local
```

Add your production environment variables:

```env
# Admin Password for Submissions Panel
ADMIN_PASSWORD=your-secure-password-here

# Node Environment
NODE_ENV=production

# Brevo SMTP Configuration
BREVO_SMTP_HOST=smtp-relay.brevo.com
BREVO_SMTP_PORT=587
BREVO_SMTP_USE_TLS=true
BREVO_SMTP_USER=your-email@smtp-brevo.com
BREVO_SMTP_PASSWORD=your-password
DEFAULT_FROM_EMAIL=your-email@gmail.com
```

**Important:** Make sure this file exists on the server before the first deployment, as it won't be copied from your local machine (it's excluded from deployment for security).

### 3. Data Directories

Create necessary data directories:

```bash
mkdir -p /root/kupennia-cleaning/data
touch /root/kupennia-cleaning/data/submissions.json
touch /root/kupennia-cleaning/data/recipients.json
echo '[]' > /root/kupennia-cleaning/data/submissions.json
echo '[]' > /root/kupennia-cleaning/data/recipients.json
```

## GitHub Actions Setup

### 1. Configure Secrets

In your GitHub repository:
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add each secret:
   - `SSH_HOST`: `72.61.206.211`
   - `SSH_USER`: Your SSH username (e.g., `root`)
   - `SSH_PASSWORD`: Your SSH password

**Note:** Using password authentication is simpler but less secure than SSH keys. For production environments, consider using SSH keys for better security.

## Deployment Process

### Automatic Deployment

Once configured, every push to the `main` branch will automatically:

1. Build the Next.js application
2. Copy files to `/root/kupennia-cleaning` on your server
3. Install production dependencies
4. Restart/reload the PM2 process

### Manual Deployment

You can also trigger deployment manually:

1. Go to **Actions** tab in GitHub
2. Select **Deploy to Production** workflow
3. Click **Run workflow**

## PM2 Management

### Useful PM2 Commands

```bash
# Check status
pm2 status

# View logs
pm2 logs kupennia-cleaning

# Restart application
pm2 restart kupennia-cleaning

# Stop application
pm2 stop kupennia-cleaning

# View detailed info
pm2 describe kupennia-cleaning

# Monitor resources
pm2 monit
```

### PM2 Logs

Logs are stored in:
- Error logs: `/root/kupennia-cleaning/logs/pm2-error.log`
- Output logs: `/root/kupennia-cleaning/logs/pm2-out.log`

## Troubleshooting

### Build Fails

- Check GitHub Actions logs for specific errors
- Ensure all environment variables are set correctly
- Verify Node.js version matches (18+)

### Application Won't Start

- SSH into server and check PM2 logs: `pm2 logs kupennia-cleaning`
- Verify `.env.local` exists and has correct values
- Check if port 3000 is available: `netstat -tulpn | grep 3000`
- Ensure data directories exist and are writable

### SSH Connection Issues

- Verify SSH password is correctly added to GitHub secrets
- Test SSH connection manually: `ssh user@72.61.206.211`
- Check server firewall allows SSH (port 22)
- Ensure password authentication is enabled on your server (check `/etc/ssh/sshd_config`)

### PM2 Not Found

- Install PM2 globally: `npm install -g pm2`
- Verify installation: `pm2 --version`

## Security Notes

1. **Never commit `.env.local`** - It's excluded from git
2. **Use strong passwords** - Especially for `ADMIN_PASSWORD` and `SSH_PASSWORD`
3. **Password vs SSH Keys** - Password authentication is simpler but less secure. Consider using SSH keys for production
4. **Keep secrets secure** - Never share or expose passwords in logs or public repositories
5. **Regular updates** - Keep Node.js and dependencies updated
6. **Firewall** - Only expose necessary ports (22 for SSH, 3000 for app)
7. **SSH Security** - Consider disabling password authentication and using SSH keys only for better security

## Monitoring

Monitor your application:

```bash
# Real-time monitoring
pm2 monit

# Check application status
pm2 status

# View recent logs
pm2 logs kupennia-cleaning --lines 100
```

## Rollback

If you need to rollback to a previous version:

```bash
# SSH into server
ssh user@72.61.206.211

# Navigate to deployment directory
cd /root/kupennia-cleaning

# Checkout previous commit
git checkout <previous-commit-hash>

# Rebuild and restart
npm ci --production
pm2 reload kupennia-cleaning
```

Or use GitHub Actions to deploy a specific commit/tag.

