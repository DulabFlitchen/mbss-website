import type { NextRequest } from 'next/server';

function getNetlifyBaseUrl(request: NextRequest): string {
  return process.env.URL ?? request.nextUrl.origin;
}

export async function submitToNetlifyForm(
  request: NextRequest,
  formName: string,
  payload: Record<string, string>
): Promise<void> {
  if (process.env.NETLIFY !== 'true') {
    return;
  }

  const body = new URLSearchParams({ 'form-name': formName, ...payload });
  const baseUrl = getNetlifyBaseUrl(request);

  const response = await fetch(`${baseUrl}/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body.toString(),
  });

  if (!response.ok) {
    throw new Error(`Netlify form submission failed with status ${response.status}`);
  }
}
