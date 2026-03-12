"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createContactFormSchema, type ContactFormValues } from "@/lib/validations";
import type { ContactApiResponse } from "@/types";

type FormStatus = "idle" | "submitting" | "success" | "error";

const API_ERROR_MAP: Record<string, string> = {
  rate_limited: "errors.rateLimited",
  send_failed: "errors.sendFailed",
  server_error: "errors.serverError",
  validation_error: "errors.validationError",
};

export function Contact() {
  const t = useTranslations("contact");
  const tv = useTranslations("validation");

  const contactFormSchema = createContactFormSchema({
    nameMin: tv("nameMin"),
    nameMax: tv("nameMax"),
    contactMin: tv("contactMin"),
    contactMax: tv("contactMax"),
    messageMin: tv("messageMin"),
    messageMax: tv("messageMax"),
  });

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
        const errorKey = API_ERROR_MAP[result.error ?? ""];
        setErrorMessage(errorKey ? t(errorKey) : t("errors.generic"));
        return;
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setErrorMessage(t("errors.network"));
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
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {status === "success" ? (
            <SuccessMessage
              title={t("success.title")}
              description={t("success.description")}
            />
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card space-y-5 rounded-xl p-6 sm:p-8"
            >
              <Input
                label={t("form.name")}
                id="name"
                placeholder={t("form.namePlaceholder")}
                error={errors.name?.message}
                {...register("name")}
              />

              <Input
                label={t("form.contact")}
                id="contact"
                placeholder={t("form.contactPlaceholder")}
                error={errors.contact?.message}
                {...register("contact")}
              />

              <Textarea
                label={t("form.message")}
                id="message"
                placeholder={t("form.messagePlaceholder")}
                error={errors.message?.message}
                {...register("message")}
              />

              {status === "error" && (
                <p className="text-sm text-accent">{errorMessage}</p>
              )}

              <Button
                type="submit"
                isLoading={status === "submitting"}
                className="w-full"
              >
                {t("form.submit")}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

interface SuccessMessageProps {
  title: string;
  description: string;
}

function SuccessMessage({ title, description }: SuccessMessageProps) {
  return (
    <div className="glass-card rounded-xl border border-accent/30 p-8 text-center">
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
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );
}
