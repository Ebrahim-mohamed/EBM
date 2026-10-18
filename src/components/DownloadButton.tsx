import { useLocale } from "next-intl";
import Link from "next/link";

export function DownloadButton({
  inter,
  type = "company",
}: {
  inter?: boolean;
  type?: "company" | "installation";
}) {
  const locale = useLocale();

  const href =
    type === "installation"
      ? "https://api.ebmksa.com/installation-maintenance-profile.pdf"
      : inter
      ? "https://api.ebmksa.com/inter-company-profile.pdf"
      : "https://api.ebmksa.com/company-profile.pdf";

  const label =
    type === "installation"
      ? locale === "en"
        ? "Installation & Maintenance Profile"
        : "ملف التركيب والصيانة"
      : locale === "en"
      ? "Company Profile"
      : "ملف الشركة";

  return (
    <Link
      download
      target="_blank"
      href={href}
      className={`px-[1rem] py-[0.5rem] bg-[#4082BF]  text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center`}
    >
      {label}
    </Link>
  );
}