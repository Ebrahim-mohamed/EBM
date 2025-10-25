import { useTranslations } from "next-intl";

export function WhySection() {
  const t = useTranslations("interiorArchitecturePage.whySection");
  return (
    <div className="p-[var(--sectionPadding)] flex items-start gap-[5rem] text-white max-[1280px]:flex-col">
      <div className="max-w-[38rem]">
        <h1 className=" text-[4rem] font-black">
          {t.rich("header", {
            second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
          })}
        </h1>
        <p className="text-[1.5rem] font-[350]">{t("des")}</p>
      </div>
      <div className="flex justify-end items-start w-full  flex-1 max-[1280px]:justify-start">
        <div className="flex items-start justify-between flex-col gap-[1rem]">
          {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
            <p key={num} className="text-[1.5rem] font-normal leading-[2.4rem]">
              {t(`pra${num}`)}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
