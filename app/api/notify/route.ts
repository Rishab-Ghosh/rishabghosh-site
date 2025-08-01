import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage (same as subscribe route)
let subscribers: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const { blogTitle, blogUrl } = await request.json();
    
    if (!blogTitle) {
      return NextResponse.json({ error: 'Blog title is required' }, { status: 400 });
    }

    // In a real implementation, you'd:
    // 1. Fetch subscribers from your database
    // 2. Use a proper email service like SendGrid, Mailgun, or Resend
    // 3. Send emails to all subscribers
    
    // For now, we'll simulate the email sending
    console.log('=== EMAIL NOTIFICATION ===');
    console.log('From: rishab_14@icloud.com');
    console.log('Subject: ' + blogTitle + ' - New Post');
    console.log('Body: Hey there! I just uploaded a new blog! Check it out!');
    console.log('URL: ' + (blogUrl || 'https://www.rishabghosh.org/blog'));
    console.log('Subscribers to notify:', subscribers.length);
    console.log('========================');

    return NextResponse.json({ 
      success: true, 
      message: `Notification sent to ${subscribers.length} subscribers`,
      blogTitle 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send notification' }, { status: 500 });
  }
} 