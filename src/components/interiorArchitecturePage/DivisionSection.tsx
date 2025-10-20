import { useTranslations } from "next-intl";
import Image from "next/image";

export function DivisionSection() {
  const t = useTranslations("interiorArchitecturePage.divisionSection");
  return (
    <div className="p-[var(--sectionPadding)] flex w-full items-start justify-between gap-[4rem]">
      <div className="flex flex-col gap-[2rem] text-white font-black flex-1">
        <div>
          <h1 className="text-[#A8CF38] text-[1.5rem] ">{t("header")}</h1>
          <p className="text-[3rem]">
            {t.rich("des", {
              second: (chunk) => (
                <span className="text-[#A8CF38]">{chunk}</span>
              ),
            })}
          </p>
        </div>
        <div className="flex flex-col gap-[0.5rem]">
          <p className="leading-[1.6rem] text-[1rem] font-normal">
            {t("content1")}
          </p>
          <p className="leading-[1.6rem] text-[1rem] font-normal">
            {t("content2")}
          </p>
        </div>
      </div>
      <Image
        alt="persons image"
        width={600}
        height={300}
        src="/interiorArchitecturalPage/division.png"
        className="w-[50%]"
      />
    </div>
  );
}
