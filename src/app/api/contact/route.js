import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const formData = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Contact <contact@madlad.store>',
      to: [formData.email, "martin.nicolai.online@gmail.com"],
      subject: formData.reason,
      react: EmailTemplate(formData),
    });

    if (error) {
      return Response.json({
        success: false,
        error,
        data: null
      }, { status: 500 });
    }

    return Response.json({
      success: true,
      data,
      error: null
    });
  } catch (error) {
    return Response.json({
      success: false,
      error,
      data: null
    }, { status: 500 });
  }
}