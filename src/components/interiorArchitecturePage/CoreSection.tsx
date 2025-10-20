import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { GallerySlider } from "@/app/[locale]/interior-architectural/Swiper";

export function CoreSection() {
  const t = useTranslations("interiorArchitecturePage.coreSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <GallerySlider />
    </div>
  );
}
