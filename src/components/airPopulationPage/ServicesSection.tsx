import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { ServiceBox } from "./ServiceBox";

export function ServicesSection() {
  const heroT = useTranslations(
    "airPopulationPage.solutionsAndServicesSection"
  );
  return (
    <div className=" p-[var(--sectionPadding)]">
      <Header
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="flex flex-col items-center justify-center gap-[7rem]">
        {Array.from({ length: 3 }, (_, i) => i + 1).map((num) => (
          <ServiceBox key={num} serviceNum={num} />
        ))}
      </div>
    </div>
  );
}
