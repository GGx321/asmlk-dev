import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(100, "Имя слишком длинное"),
  contact: z
    .string()
    .min(3, "Укажите email или Telegram")
    .max(200, "Контакт слишком длинный"),
  message: z
    .string()
    .min(10, "Сообщение должно содержать минимум 10 символов")
    .max(2000, "Сообщение слишком длинное"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
