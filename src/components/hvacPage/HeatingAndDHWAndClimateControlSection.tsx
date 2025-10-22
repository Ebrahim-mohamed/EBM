import { useTranslations } from "next-intl";
import { MostUsedHeader } from "./MostUsedHeader";
import { HeatingAndDhwComp } from "./HeatingAndDhwComp";

export function HeatingAndDHWAndClimateControlSection() {
  const t = useTranslations("hvacPage.heatingAndDhwAndClimateControlSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <MostUsedHeader des={t("des")} header={t("header")} />
      <div className="flex  items-stretch gap-[9rem]">
        <HeatingAndDhwComp partName="heatingSection" />
        <HeatingAndDhwComp partName="dhwSection" />
      </div>
    </div>
  );
}
