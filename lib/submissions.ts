import { promises as fs } from 'fs';
import path from 'path';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'submissions.json');

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.dirname(SUBMISSIONS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read all submissions
export async function getSubmissions(): Promise<ContactSubmission[]> {
  try {
    await ensureDataDirectory();
    const fileContent = await fs.readFile(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    // File doesn't exist yet, return empty array
    return [];
  }
}

// Save a new submission
export async function saveSubmission(submission: Omit<ContactSubmission, 'id' | 'timestamp'>): Promise<ContactSubmission> {
  await ensureDataDirectory();
  
  const submissions = await getSubmissions();
  const newSubmission: ContactSubmission = {
    ...submission,
    id: `sub_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    timestamp: new Date().toISOString(),
  };
  
  submissions.push(newSubmission);
  await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
  
  return newSubmission;
}

// Delete a submission
export async function deleteSubmission(id: string): Promise<boolean> {
  try {
    const submissions = await getSubmissions();
    const filtered = submissions.filter(s => s.id !== id);
    await fs.writeFile(SUBMISSIONS_FILE, JSON.stringify(filtered, null, 2));
    return true;
  } catch {
    return false;
  }
}

