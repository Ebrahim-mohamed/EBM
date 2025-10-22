import { useTranslations } from "next-intl";

export default function TermsOfUse() {
  const t = useTranslations("terms");
  return (
    <div className="p-[var(--sectionPadding)]  flex flex-col gap-[4rem] text-white">
      <h1 className="font-bold text-[2rem] mt-[8rem]">{t("header")}</h1>
      <p className="font-[350] text-[1.125rem]">{t("des")}</p>
    </div>
  );
}
