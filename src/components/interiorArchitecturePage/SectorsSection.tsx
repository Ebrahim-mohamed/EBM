import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { SectorBox } from "./SectorBox";

export function SectorsSection() {
  const t = useTranslations("interiorArchitecturePage.sectorsSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="flex items-start justify-between w-full">
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <SectorBox pra={t(`sector${num}`)} key={num} />
        ))}
      </div>
    </div>
  );
}
