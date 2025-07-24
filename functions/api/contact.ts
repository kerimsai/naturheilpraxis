
import { Resend } from 'resend';
import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(10),
  privacyPolicy: z.boolean().optional(),
});

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

// Handle OPTIONS requests for CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 200,
    headers: corsHeaders,
  });
};

// Handle POST requests
export const onRequestPost: PagesFunction<{ RESEND_API_KEY: string }> = async ({ request, env }) => {
  try {
    // Validate content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return new Response(
        JSON.stringify({ message: 'Content-Type must be application/json' }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const body = await request.json();
    const { name, email, phone, message } = contactFormSchema.parse(body);

    // Validate environment variable
    if (!env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY environment variable is not set');
      return new Response(
        JSON.stringify({ message: 'Server configuration error' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Kontaktformular <kontakt@heilpraxis-jordan.de>',
      to: ['info@heilpraxis-jordan.de'],
      subject: `Neue Kontaktanfrage von ${name}`,
      reply_to: email,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #2c5530; margin: 0 0 10px 0;">Neue Kontaktanfrage</h2>
            <p style="margin: 0; color: #666;">Sie haben eine neue Nachricht über das Kontaktformular Ihrer Website erhalten.</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4; font-weight: bold; width: 100px;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4; font-weight: bold;">E-Mail:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4;"><a href="mailto:${email}" style="color: #2c5530; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4; font-weight: bold;">Telefon:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #f1f3f4;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Nachricht:</td>
                <td style="padding: 8px 0;"></td>
              </tr>
            </table>
            
            <div style="background-color: #f8f9fa; border: 1px solid #e9ecef; padding: 15px; border-radius: 5px; margin-top: 10px; white-space: pre-wrap; font-family: Arial, sans-serif;">${message}</div>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px; font-size: 14px; color: #2c5530;">
            <p style="margin: 0;"><strong>Hinweis:</strong> Diese E-Mail wurde automatisch über das Kontaktformular Ihrer Website generiert.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return new Response(
        JSON.stringify({ message: 'Fehler beim Senden der E-Mail' }),
        { 
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'E-Mail erfolgreich gesendet' }),
      { 
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Handle validation errors
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          message: 'Ungültige Formulardaten',
          errors: error.errors.map(e => ({ field: e.path.join('.'), message: e.message }))
        }),
        { 
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Unerwarteter Serverfehler' }),
      { 
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
};
