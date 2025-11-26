import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { WebsiteHeader } from "@/components/WebsiteHeader";
import { Footer } from "@/components/Footer";
import { WhatsappButton } from "./WhatsappButton";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="relative overflow-x-hidden bg-[var(--mainBackGroundColor)]">
        <NextIntlClientProvider>
          <WebsiteHeader />

          {children}

          {/* ✅ Floating WhatsApp Button */}
          <WhatsappButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
