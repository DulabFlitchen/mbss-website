export async function POST(request: Request) {
  try {
    const body = await request.text();
    
    // Netlify will intercept this during deployment
    // The __forms.html file defines the form structure
    // This endpoint just needs to exist and return success
    
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Submission failed' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
