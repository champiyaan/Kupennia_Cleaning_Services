import { promises as fs } from 'fs';
import path from 'path';

const RECIPIENTS_FILE = path.join(process.cwd(), 'data', 'recipients.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.dirname(RECIPIENTS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Get all recipient emails
export async function getRecipients(): Promise<string[]> {
  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(RECIPIENTS_FILE, 'utf-8');
    const recipients = JSON.parse(fileContent);
    return Array.isArray(recipients) ? recipients : [];
  } catch (error) {
    // File doesn't exist yet, return default
    return [];
  }
}

// Add a recipient email
export async function addRecipient(email: string): Promise<boolean> {
  try {
    await ensureDataDirectory();
    const recipients = await getRecipients();
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format');
    }
    
    // Check if already exists
    if (recipients.includes(email.toLowerCase())) {
      return false; // Already exists
    }
    
    recipients.push(email.toLowerCase());
    await fs.writeFile(RECIPIENTS_FILE, JSON.stringify(recipients, null, 2));
    return true;
  } catch (error) {
    console.error('Error adding recipient:', error);
    throw error;
  }
}

// Remove a recipient email
export async function removeRecipient(email: string): Promise<boolean> {
  try {
    await ensureDataDirectory();
    const recipients = await getRecipients();
    const filtered = recipients.filter((e: string) => e.toLowerCase() !== email.toLowerCase());
    
    if (filtered.length === recipients.length) {
      return false; // Email not found
    }
    
    await fs.writeFile(RECIPIENTS_FILE, JSON.stringify(filtered, null, 2));
    return true;
  } catch (error) {
    console.error('Error removing recipient:', error);
    throw error;
  }
}

