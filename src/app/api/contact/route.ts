import { NextResponse, type NextRequest } from "next/server";
import { contactFormSchema } from "@/lib/validations";
import { sendToTelegram } from "@/lib/telegram";
import { RATE_LIMIT } from "@/lib/constants";

const ipTimestamps = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = ipTimestamps.get(ip);

  if (lastRequest && now - lastRequest < RATE_LIMIT.windowMs) {
    return true;
  }

  ipTimestamps.set(ip, now);
  return false;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Подождите 30 секунд перед повторной отправкой" },
        { status: 429 }
      );
    }

    const body: unknown = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Неверные данные";
      return NextResponse.json(
        { success: false, error: firstError },
        { status: 400 }
      );
    }

    const result = await sendToTelegram(parsed.data);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Не удалось отправить сообщение" },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { success: false, error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
