"use server";

import { sendEmail } from "@repo/mail";
import { z } from "zod";

const contactSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof contactSchema>) {
	const parsed = contactSchema.safeParse(values);

	if (!parsed.success) {
		throw new Error("Invalid form data");
	}

	const { name, email, message } = parsed.data;
	const adminEmail = process.env.CONTACT_EMAIL;

	if (!adminEmail) {
		throw new Error("CONTACT_EMAIL environment variable is not set");
	}

	await sendEmail({
		to: adminEmail,
		subject: `New contact message from ${name}`,
		html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
		text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
	});
}
