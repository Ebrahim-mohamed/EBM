import { useTranslations } from "next-intl";
import Image from "next/image";

export function CoreBox({
  sectionName,
  num,
}: {
  sectionName: string;
  num: number;
}) {
  const t = useTranslations(`interiorArchitecturePage.${sectionName}`);
  return (
    <div
      className={`${
        num % 2 === 0 && " flex-row-reverse max-[950px]:flex-col "
      } flex w-full items-center gap-[2rem] justify-between max-[950px]:flex-col `}
    >
      <div className="flex-1 rounded-[1rem] overflow-hidden">
        <Image
          alt="service image"
          src={`/interiorArchitecturalPage/${sectionName}.jpg`}
          width={800}
          height={800}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-[1rem] flex-1">
        <h1 className="text-[#A8CF38] text-[2rem] font-bold">{t("head")}</h1>
        <p className="text-white text-[1.5rem]">{t("des")}</p>
        <ul className="list-disc pl-6 text-white">
          {Array.from(
            { length: sectionName === "floor" ? 4 : 5 },
            (_, i) => i + 1
          ).map((num) => (
            <li key={num}>{t(`point${num}`)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
