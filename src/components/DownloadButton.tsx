import { useLocale } from "next-intl";
import Link from "next/link";

export function DownloadButton() {
  const locale = useLocale();
  return (
    <Link
      download
      target="_blank"
      href="https://api.ebmksa.com/company-profile.pdf"
      className={`px-[1rem] py-[0.5rem] bg-[#4082BF]  text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center`}
    >
      {locale === "en" ? "Company Profile" : "ملف الشركة"}
    </Link>
  );
}
