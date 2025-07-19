
import { Resend } from 'resend';
import * as z from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(6),
  message: z.string().min(10),
});

export const onRequestPost: PagesFunction<{ RESEND_API_KEY: string }> = async ({ request, env }) => {
  try {
    const body = await request.json();
    const { name, email, phone, message } = contactFormSchema.parse(body);

    const resend = new Resend(env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'Kontaktformular <info@heilpraxis-jordan.de>',
      to: ['info@heilpraxis-jordan.de'],
      subject: `Neue Nachricht von ${name}`,
      reply_to: email,
      html: `
              <div style="font-family: sans-serif; font-size: 16px; color: #333;">
                <h2>Neue Kontaktanfrage</h2>
                <p>Sie haben eine neue Nachricht von Ihrer Website erhalten.</p>
                <hr style="border: none; border-top: 1px solid #eee;" />
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Telefon:</strong> ${phone}</p>
                <p><strong>Nachricht:</strong></p>
                <p style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
                <hr style="border: none; border-top: 1px solid #eee;" />
              </div>
            `,
    });

    if (error) {
      return new Response(JSON.stringify({ message: 'Error sending email', error }), { status: 500 });
    }

    return new Response(JSON.stringify({ message: 'Email sent successfully' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Invalid request', error }), { status: 400 });
  }
};
