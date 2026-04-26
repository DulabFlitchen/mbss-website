import { NextRequest, NextResponse } from 'next/server';
import { submitToNetlifyForm } from '@/app/lib/netlify-forms';
import { enforceRateLimit } from '@/app/lib/rate-limit';

interface ApplyFormData {
  studentName: string;
  gender: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  guardianName: string;
  guardianPhone: string;
  guardianEmail?: string;
  applyingFor: string;
  previousSchool: string;
  message?: string;
  botField?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+()\d\s-]{7,20}$/;
const allowedGender = new Set(['male', 'female']);
const allowedClasses = new Set(['form1', 'form2', 'form3', 'form4', 'form5', 'form6']);

function getClientIp(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

function isValidBirthDate(value: string): boolean {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return false;
  }

  const now = new Date();
  if (date > now) {
    return false;
  }

  const yearDiff = now.getFullYear() - date.getFullYear();
  return yearDiff >= 8 && yearDiff <= 30;
}

export async function POST(request: NextRequest) {
  try {
    const rateLimit = enforceRateLimit(`apply:${getClientIp(request)}`, 6, 60 * 1000);
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

    const data = (await request.json()) as ApplyFormData;

    if (data.botField?.trim()) {
      return NextResponse.json({ message: 'Application submitted successfully' }, { status: 200 });
    }

    const studentName = data.studentName?.trim() ?? '';
    const gender = data.gender?.trim().toLowerCase() ?? '';
    const dateOfBirth = data.dateOfBirth?.trim() ?? '';
    const email = data.email?.trim().toLowerCase() ?? '';
    const phone = data.phone?.trim() ?? '';
    const guardianName = data.guardianName?.trim() ?? '';
    const guardianPhone = data.guardianPhone?.trim() ?? '';
    const guardianEmail = data.guardianEmail?.trim().toLowerCase() ?? '';
    const applyingFor = data.applyingFor?.trim().toLowerCase() ?? '';
    const previousSchool = data.previousSchool?.trim() ?? '';
    const message = data.message?.trim() ?? '';

    const requiredFields = [
      studentName,
      gender,
      dateOfBirth,
      email,
      phone,
      guardianName,
      guardianPhone,
      applyingFor,
      previousSchool,
    ];

    if (requiredFields.some((field) => !field)) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (studentName.length < 2 || studentName.length > 100) {
      return NextResponse.json(
        { error: 'Student name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (!allowedGender.has(gender)) {
      return NextResponse.json(
        { error: 'Invalid gender value' },
        { status: 400 }
      );
    }

    if (!isValidBirthDate(dateOfBirth)) {
      return NextResponse.json(
        { error: 'Date of birth is invalid' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid student email format' },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid student phone format' },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(guardianPhone)) {
      return NextResponse.json(
        { error: 'Invalid guardian phone format' },
        { status: 400 }
      );
    }

    if (guardianEmail && !emailRegex.test(guardianEmail)) {
      return NextResponse.json(
        { error: 'Invalid guardian email format' },
        { status: 400 }
      );
    }

    if (!allowedClasses.has(applyingFor)) {
      return NextResponse.json(
        { error: 'Invalid class/grade value' },
        { status: 400 }
      );
    }

    if (previousSchool.length < 2 || previousSchool.length > 150) {
      return NextResponse.json(
        { error: 'Previous school must be between 2 and 150 characters' },
        { status: 400 }
      );
    }

    if (message.length > 1500) {
      return NextResponse.json(
        { error: 'Additional information must be 1500 characters or fewer' },
        { status: 400 }
      );
    }

    await submitToNetlifyForm(request, 'application', {
      studentName,
      gender,
      dateOfBirth,
      email,
      phone,
      guardianName,
      guardianPhone,
      guardianEmail,
      applyingFor,
      previousSchool,
      message,
    });

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Application form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
