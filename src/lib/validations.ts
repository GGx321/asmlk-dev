import { z } from "zod";

interface ValidationMessages {
  nameMin: string;
  nameMax: string;
  contactMin: string;
  contactMax: string;
  messageMin: string;
  messageMax: string;
}

export function createContactFormSchema(messages: ValidationMessages) {
  return z.object({
    name: z
      .string()
      .min(2, messages.nameMin)
      .max(100, messages.nameMax),
    contact: z
      .string()
      .min(3, messages.contactMin)
      .max(200, messages.contactMax),
    message: z
      .string()
      .min(10, messages.messageMin)
      .max(2000, messages.messageMax),
  });
}

export const contactFormSchema = createContactFormSchema({
  nameMin: "Name must be at least 2 characters",
  nameMax: "Name is too long",
  contactMin: "Please provide email or Telegram",
  contactMax: "Contact is too long",
  messageMin: "Message must be at least 10 characters",
  messageMax: "Message is too long",
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
