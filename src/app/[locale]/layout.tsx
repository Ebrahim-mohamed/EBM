import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { WebsiteHeader } from "@/components/WebsiteHeader";
import { Footer } from "@/components/Footer";
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
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
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
