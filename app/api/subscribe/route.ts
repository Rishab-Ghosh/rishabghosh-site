import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory storage (in production, you'd use a database)
let subscribers: string[] = [];

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    // Check if email already exists
    if (subscribers.includes(email)) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 });
    }

    // Add email to subscribers
    subscribers.push(email);
    
    console.log('New subscriber:', email);
    console.log('Total subscribers:', subscribers.length);

    return NextResponse.json({ success: true, message: 'Successfully subscribed!' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }
}

// Endpoint to send notifications (you'll call this when posting a blog)
export async function GET() {
  return NextResponse.json({ subscribers });
} 