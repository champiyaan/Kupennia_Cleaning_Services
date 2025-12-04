import { NextRequest, NextResponse } from 'next/server';
import { saveSubmission } from '@/lib/submissions';
import { sendContactNotification } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Save submission
    await saveSubmission({
      name,
      email,
      phone,
      service: service || '',
      message: message || '',
    });

    // Send email notification
    try {
      await sendContactNotification({
        name,
        email,
        phone,
        service: service || undefined,
        message: message || undefined,
      });
    } catch (emailError) {
      // Log error but don't fail the request
      console.error('Failed to send email notification:', emailError);
      // Continue - submission is saved even if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ve received your message and will get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}

