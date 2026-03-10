import type { ContactFormValues } from "./validations";

const TELEGRAM_API = "https://api.telegram.org";

function getBotConfig(): { token: string; chatId: string } {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    throw new Error("TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID must be set");
  }

  return { token, chatId };
}

function formatMessage(data: ContactFormValues): string {
  return [
    "📬 *Новая заявка с портфолио*",
    "",
    `👤 *Имя:* ${escapeMarkdown(data.name)}`,
    `📱 *Контакт:* ${escapeMarkdown(data.contact)}`,
    "",
    `💬 *Сообщение:*`,
    escapeMarkdown(data.message),
  ].join("\n");
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+=|{}.!-]/g, "\\$&");
}

export async function sendToTelegram(
  data: ContactFormValues
): Promise<{ success: boolean; error?: string }> {
  try {
    const { token, chatId } = getBotConfig();

    const response = await fetch(
      `${TELEGRAM_API}/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: formatMessage(data),
          parse_mode: "MarkdownV2",
        }),
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Telegram API error:", {
        status: response.status,
        body: errorBody,
      });
      return { success: false, error: "Failed to send message" };
    }

    return { success: true };
  } catch (error) {
    console.error("Telegram send error:", error);
    return { success: false, error: "Service unavailable" };
  }
}
