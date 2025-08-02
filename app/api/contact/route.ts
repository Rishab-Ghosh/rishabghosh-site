import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // In a real implementation, you'd use an email service like:
    // - SendGrid
    // - Mailgun
    // - Resend
    // - Nodemailer with SMTP
    
    // For now, we'll simulate the email sending
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('To: rishabghosh@utexas.edu');
    console.log('From: ' + email);
    console.log('Subject: New Contact Form Message from ' + name);
    console.log('Message:');
    console.log(message);
    console.log('==============================');

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
} 