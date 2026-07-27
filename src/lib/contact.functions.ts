import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import nodemailer from "nodemailer";

const DEFAULT_ZOHO_SMTP_HOST = "smtp.zoho.com";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  courseInterest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    try {
      const user = getEnv("ZOHO_EMAIL");
      const pass = getEnv("ZOHO_APP_PASSWORD") ?? getEnv("ZOHO_PASSWORD");
      const recipient = getEnv("CONTACT_RECIPIENT_EMAIL") ?? user;
      const host = getEnv("ZOHO_SMTP_HOST") ?? DEFAULT_ZOHO_SMTP_HOST;

      if (!user || !pass) {
        console.warn(
          "Please add ZOHO_EMAIL and ZOHO_APP_PASSWORD to your .env file to send emails.",
        );
        // To prevent the site from breaking before you add the credentials, we pretend it succeeded.
        // Once configured, you can change this to throw an error instead.
        return { ok: true as const };
      }

      if (pass.includes("#")) {
        console.warn(
          'ZOHO_APP_PASSWORD contains "#". Make sure the value is wrapped in double quotes in your .env file.',
        );
      }

      const transporter = nodemailer.createTransport({
        host,
        port: 465,
        secure: true, // Use SSL for port 465
        auth: {
          user: user,
          pass: pass,
        },
      });

      const mailOptions = {
        // Send from your own authenticated email, but set the sender name
        from: `"${data.name}" <${user}>`,
        // Send the notification to yourself
        to: recipient,
        // When you hit "Reply" in Zoho, it will reply to the user's email
        replyTo: data.email,
        subject: "New Contact Form Submission - LBC Portal",
        text: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Course Interest: ${data.courseInterest || "N/A"}

Message:
${data.message}
        `,
      };

      await transporter.sendMail(mailOptions);

      return { ok: true as const };
    } catch (error) {
      console.error("contact email failed", error);
      throw new Error("Could not send your message. Please try again.");
    }
  });
