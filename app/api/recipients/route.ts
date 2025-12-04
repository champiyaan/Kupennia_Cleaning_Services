import { NextRequest, NextResponse } from 'next/server';
import { getRecipients, addRecipient, removeRecipient } from '@/lib/recipients';
import { cookies } from 'next/headers';

// Check if user is authenticated
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const authToken = cookieStore.get('admin-auth');
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  
  return authToken?.value === adminPassword;
}

export async function GET(request: NextRequest) {
  try {
    // Check authentication
    if (!(await isAuthenticated())) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const recipients = await getRecipients();
    return NextResponse.json({ recipients }, { status: 200 });
  } catch (error) {
    console.error('Error fetching recipients:', error);
    return NextResponse.json(
      { error: 'Failed to fetch recipients' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Check authentication
    if (!(await isAuthenticated())) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const body = await request.json();
    const { email } = body;
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    const success = await addRecipient(email);
    
    if (success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Error adding recipient:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to add recipient' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    // Check authentication
    if (!(await isAuthenticated())) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }
    
    const success = await removeRecipient(email);
    
    if (success) {
      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      return NextResponse.json(
        { error: 'Email not found' },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error('Error removing recipient:', error);
    return NextResponse.json(
      { error: 'Failed to remove recipient' },
      { status: 500 }
    );
  }
}

