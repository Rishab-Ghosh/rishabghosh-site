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

    // You can integrate with a real email service here
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'rishabghosh@utexas.edu',
      from: 'noreply@yourdomain.com', // Verified sender
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
} 