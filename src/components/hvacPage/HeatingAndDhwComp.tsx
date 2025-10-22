import { useTranslations } from "next-intl";
import Image from "next/image";

export function HeatingAndDhwComp({ partName }: { partName: string }) {
  const t = useTranslations(`hvacPage.${partName}`);
  const max = partName === "heatingSection" ? 2 : 3;
  return (
    <div className="flex flex-col gap-[1rem] flex-1">
      <h1 className="text-[2rem] text-[#A8CF38] font-black">{t("header")}</h1>
      <ul className="list-disc pl-6 text-white text-[1.125rem] font-normal leading-[1.8rem] ">
        {Array.from({ length: max }, (_, i) => i + 1).map((num) => (
          <li key={num} className="text-[1.125rem] font-[350]">
            {t(`point${num}`)}
          </li>
        ))}
      </ul>
      <div className="flex gap-[1rem] mt-auto">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
          <Image
            key={num}
            alt="image"
            width={400}
            height={400}
            src={`/hvacPage/HeatingAndDHWAndClimateControlSection/${partName}/${num}.png`}
            className="flex-1 rounded-[0.5rem] "
          />
        ))}
      </div>
    </div>
  );
}
