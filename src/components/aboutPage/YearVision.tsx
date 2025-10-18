import Image from "next/image";
import { Header } from "../Header";
import { useTranslations } from "next-intl";
import { YearVisionBox } from "./YearVisionBox";

export function YearVision() {
  const t = useTranslations("aboutPage.visionSection");
  return (
    <div className="p-[var(--sectionPadding)] bg-[#111827] flex items-center justify-between gap-[1rem] w-full">
      <div className="flex-1">
        <Header
          isBr
          isNotCenter
          header={t.rich("header", {
            second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
          })}
          pra={t("des")}
        />
        <div className="grid grid-cols-2 gap-x-[1rem] gap-y-[2rem]">
          {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
            <YearVisionBox content={t(`pra${num}`)} key={num} />
          ))}
        </div>
      </div>
      <div className="flex-1 justify-end flex">
        <Image
          alt="world image"
          width={600}
          height={600}
          src="/aboutPage/yearVision.png"
        />
      </div>
    </div>
  );
}
