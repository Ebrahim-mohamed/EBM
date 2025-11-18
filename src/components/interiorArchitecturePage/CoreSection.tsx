import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { GallerySlider } from "@/app/[locale]/interior-architectural/Swiper";
import { CoreBox } from "./CoreBox";

export function CoreSection() {
  const t = useTranslations("interiorArchitecturePage.coreSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      {/* <GallerySlider /> */}
      <div className="flex w-full flex-col gap-[1.5rem]">
        <CoreBox sectionName="matt" num={0} />
        <CoreBox sectionName="cover" num={1} />
        <CoreBox sectionName="floor" num={2} />
        <CoreBox sectionName="wall" num={3} />
        <CoreBox sectionName="vinylFloor" num={4} />
        <CoreBox sectionName="solar" num={5} />
        <CoreBox sectionName="window" num={6} />
      </div>
    </div>
  );
}
