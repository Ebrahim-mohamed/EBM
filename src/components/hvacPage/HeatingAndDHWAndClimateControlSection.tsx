import { useTranslations } from "next-intl";
import { MostUsedHeader } from "./MostUsedHeader";
import { HeatingAndDhwComp } from "./HeatingAndDhwComp";
import { ClimateControlComp } from "./ClimateControlComp";

export function HeatingAndDHWAndClimateControlSection() {
  const t = useTranslations("hvacPage.heatingAndDhwAndClimateControlSection");
  const ClimateHeader = useTranslations("hvacPage.climateControlHeader");
  return (
    <div className="p-[var(--sectionPadding)]">
      <MostUsedHeader des={t("des")} header={t("header")} />
      <div className="flex  items-stretch gap-[9rem]">
        <HeatingAndDhwComp partName="heatingSection" />
        <HeatingAndDhwComp partName="dhwSection" />
      </div>
      <h1 className="text-[2rem] text-[#A8CF38] font-black my-[4rem]">
        {ClimateHeader("header")}
      </h1>
      <div className="flex flex-col gap-[2rem]">
        <div className="flex  items-stretch gap-[9rem]">
          <ClimateControlComp partName="heatPumpSection" imagesNumber={3} />
          <ClimateControlComp
            partName="heatExchangerSection"
            imagesNumber={3}
          />
        </div>
        <div className="flex  items-stretch gap-[9rem]">
          <ClimateControlComp partName="dehumidifierSection" imagesNumber={3} />
          <ClimateControlComp
            partName="airHandlingUnitsSection"
            imagesNumber={3}
          />
        </div>
        <div className="flex  items-stretch gap-[9rem]">
          <ClimateControlComp partName="humidifierSection" imagesNumber={2} />
          <ClimateControlComp partName="chillerSection" imagesNumber={2} />
        </div>
        <div className="flex  items-stretch gap-[9rem]">
          <ClimateControlComp partName="cracUnitsSection" imagesNumber={1} />
          <ClimateControlComp
            partName="fanCollsUnitsSection"
            imagesNumber={1}
          />
        </div>
      </div>
    </div>
  );
}
