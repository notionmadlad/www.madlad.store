import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, reason, details } = await request.json();
    const data = await resend.emails.send({
      from: "Martin <contact@madlad.store>",
      to: [email, "martin.nicolai.online@gmail.com"],
      subject: reason,
      react: EmailTemplate({
        name,
        email,
        reason,
        details,
      }),
    });

    console.log({ name, email, reason, details });

    return NextResponse.json({
      success: true,
      data,
      error: null,
    });
  } catch (error) {
    return NextResponse({
      success: false,
      data: null,
      error,
    });
  }
}
