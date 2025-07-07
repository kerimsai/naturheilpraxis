import {NextRequest, NextResponse} from 'next/server';
import {Resend} from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {name, email, message} = contactFormSchema.parse(body);

    const {data, error} = await resend.emails.send({
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
          <p><strong>Nachricht:</strong></p>
          <p style="background-color: #f9f9f9; border: 1px solid #ddd; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #999;">Diese E-Mail wurde über das Kontaktformular auf Ihrer Website gesendet.</p>
        </div>
      `,
    });

    if (error) {
      console.error({error});
      return NextResponse.json({error}, {status: 500});
    }

    return NextResponse.json({data});
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({error: error.issues}, {status: 400});
    }
    console.error(error);
    return NextResponse.json({error: 'Internal Server Error'}, {status: 500});
  }
}
