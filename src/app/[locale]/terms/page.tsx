import { useTranslations } from "next-intl";

export default function TermsOfUse() {
  const t = useTranslations("terms");
  return (
    <div className="p-[var(--sectionPadding)]  flex flex-col gap-[4rem] text-white">
      <h1 className="font-bold text-[2rem] mt-[8rem] text-center">
        {t("header")}
      </h1>
      {Array.from({ length: 14 }, (_, i) => i + 1).map((num) => (
        <div key={num} className="text-white text-[1.25rem]">
          {num} - <span className="font-bold">{t(`title${num}`)}</span> :{" "}
          <span>{t(`des${num}`)}</span>
        </div>
      ))}
    </div>
  );
}
