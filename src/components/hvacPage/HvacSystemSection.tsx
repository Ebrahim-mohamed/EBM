import { useTranslations } from "next-intl";

export function HvacSystemSection() {
  const t = useTranslations("hvacPage.hvacSystemSection");
  return (
    <div className="text-center p-[var(--sectionPadding)] flex flex-col items-center gap-[1rem]">
      <div className="w-fit">
        <h1 className=" text-[2.5rem] font-bold text-[#A8CF38]">
          {t("header")}
        </h1>
        <div className="h-[0.2rem] w-[50%] bg-white"></div>
      </div>
      <p className=" text-[1.125rem] font-normal text-white leading-[1.8rem]">
        {t("des")}
      </p>
    </div>
  );
}
