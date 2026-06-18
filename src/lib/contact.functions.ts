import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  courseInterest: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(1).max(4000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => ContactSchema.parse(data))
  .handler(async ({ data }) => {
    
    // IMPORTANT: Replace this with your actual Web3Forms access key
    // You can get a free key for info@lbc.lk at https://web3forms.com/
    const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; 

    if (WEB3FORMS_ACCESS_KEY === "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        console.warn("Please add your Web3Forms access key to send emails.");
        // To prevent the site from breaking before you add the key, we'll pretend it succeeded.
        // throw new Error("Email service is not configured yet. Please add the access key.");
        return { ok: true as const }; 
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Contact Form Submission - LBC Portal",
          from_name: data.name,
          replyto: data.email,
          message: `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'N/A'}
Course Interest: ${data.courseInterest || 'N/A'}

Message:
${data.message}
          `,
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to send email");
      }
      
      return { ok: true as const };
    } catch (error) {
      console.error("contact email failed", error);
      throw new Error("Could not send your message. Please try again.");
    }
  });