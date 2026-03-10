"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import type { ContactApiResponse } from "@/types";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormValues): Promise<void> {
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ContactApiResponse = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        setErrorMessage(result.error ?? "Что-то пошло не так");
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage("Ошибка сети. Попробуйте позже.");
    }
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            title="Связаться"
            subtitle="Есть проект или идея? Напишите мне!"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {status === "success" ? <SuccessMessage /> : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 rounded-xl border border-border/60 bg-card p-6 sm:p-8"
            >
              <Input
                label="Имя"
                id="name"
                placeholder="Ваше имя"
                error={errors.name?.message}
                {...register("name")}
              />

              <Input
                label="Контакт"
                id="contact"
                placeholder="Email или @username в Telegram"
                error={errors.contact?.message}
                {...register("contact")}
              />

              <Textarea
                label="Сообщение"
                id="message"
                placeholder="Расскажите о вашем проекте или задаче..."
                error={errors.message?.message}
                {...register("message")}
              />

              {status === "error" && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <Button
                type="submit"
                isLoading={status === "submitting"}
                className="w-full"
              >
                Отправить заявку
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function SuccessMessage() {
  return (
    <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
        <svg
          className="h-8 w-8 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-foreground">
        Заявка отправлена!
      </h3>
      <p className="mt-2 text-sm text-muted">
        Спасибо за обращение. Я свяжусь с вами в ближайшее время.
      </p>
    </div>
  );
}
