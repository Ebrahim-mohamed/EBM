import { useTranslations } from "next-intl";
import { MostUsedHeader } from "./MostUsedHeader";
import Image from "next/image";

export function VentilationSection() {
  const t = useTranslations("hvacPage.ventilationSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <MostUsedHeader des={t("des")} header={t("header")} />
      <div className="grid grid-cols-4 gap-[2rem]">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
          <div key={num} className="relative w-full">
            <Image
              alt="image"
              width={400}
              height={400}
              src={`/hvacPage/ventilationSection/${num}.png`}
              className="w-full"
            />
            <p className="absolute top-1/2 left-1/2 -translate-1/2 text-white text-[1.7rem] font-medium leading-[1.8rem] text-center">
              {t(`text${num}`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
