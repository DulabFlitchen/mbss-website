import { NextRequest, NextResponse } from 'next/server';
import { submitToNetlifyForm } from '@/app/lib/netlify-forms';
import { enforceRateLimit } from '@/app/lib/rate-limit';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  botField?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+()\d\s-]{7,20}$/;

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

export async function POST(request: NextRequest) {
  try {
    const rateLimit = enforceRateLimit(`contact:${getClientIp(request)}`, 10, 60 * 1000);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: 'Too many requests. Please wait a minute before trying again.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': String(rateLimit.retryAfterSeconds),
          },
        }
      );
    }

    const data = (await request.json()) as ContactFormData;

    if (data.botField?.trim()) {
      return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    }

    const name = data.name?.trim() ?? '';
    const email = data.email?.trim().toLowerCase() ?? '';
    const phone = data.phone?.trim() ?? '';
    const subject = data.subject?.trim() ?? '';
    const message = data.message?.trim() ?? '';

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 80 characters' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (phone && !phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Phone number format is invalid' },
        { status: 400 }
      );
    }

    if (subject.length < 3 || subject.length > 120) {
      return NextResponse.json(
        { error: 'Subject must be between 3 and 120 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 2000) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 2000 characters' },
        { status: 400 }
      );
    }

    await submitToNetlifyForm(request, 'contact', {
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
