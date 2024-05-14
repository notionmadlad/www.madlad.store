"use server";

import EmailTemplate from "@/components/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function handleSendEmail(formData) {
  try {
    const data = await resend.emails.send({
      from: 'Coding Madlad <contact@madlad.store>',
      to: [formData.get("email"), "martin.nicolai.online@gmail.com"],
      subject: formData.get("reason"),
      react: EmailTemplate({
        name: formData.get("name"),
        email: formData.get("email"),
        reason: formData.get("reason"),
        details: formData.get("details")
      }),
    });

    return {
      success: true,
      data,
      error: null
    }
  } catch (error) {
    return {
      success: false,
      data: null,
      error
    }
  }
}