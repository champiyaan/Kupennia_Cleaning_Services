import nodemailer from 'nodemailer';
import { getRecipients } from './recipients';

export interface EmailData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
}

// Create SMTP transporter using Brevo
function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp-relay.brevo.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_HOST_USER || '869158002@smtp-brevo.com',
      pass: process.env.EMAIL_HOST_PASSWORD || 'RmO95s7hFSbHIZV6',
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });
}

export async function sendContactNotification(data: EmailData) {
  // Skip if email is not configured
  if (!process.env.EMAIL_HOST_USER || !process.env.EMAIL_HOST_PASSWORD) {
    console.log('Email notification skipped (SMTP not configured)');
    console.log('Contact form submission:', data);
    return { success: true, skipped: true };
  }

  try {
    // Get all recipient emails
    const recipients = await getRecipients();
    
    // If no recipients configured, skip sending
    if (recipients.length === 0) {
      console.log('Email notification skipped (no recipients configured)');
      console.log('Contact form submission:', data);
      return { success: true, skipped: true };
    }

    const transporter = createTransporter();
    const fromEmail = process.env.DEFAULT_FROM_EMAIL || 'geekt869@gmail.com';

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1f2937; }
            .value { color: #4b5563; margin-top: 5px; }
            .message-box { background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>
              ${data.service ? `
              <div class="field">
                <div class="label">Service:</div>
                <div class="value">${data.service}</div>
              </div>
              ` : ''}
              ${data.message ? `
              <div class="field">
                <div class="label">Message:</div>
                <div class="message-box">${data.message.replace(/\n/g, '<br>')}</div>
              </div>
              ` : ''}
              <div class="field" style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                <div class="value" style="font-size: 12px; color: #6b7280;">
                  Submitted: ${new Date().toLocaleString('en-ZW')}
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
${data.service ? `Service: ${data.service}` : ''}
${data.message ? `\nMessage:\n${data.message}` : ''}

Submitted: ${new Date().toLocaleString('en-ZW')}
    `.trim();

    // Send email to all recipients
    const mailOptions = {
      from: fromEmail,
      to: recipients.join(', '),
      subject: `New Contact Form Submission from ${data.name}`,
      html: htmlContent,
      text: textContent,
    };

    const result = await transporter.sendMail(mailOptions);
    
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
