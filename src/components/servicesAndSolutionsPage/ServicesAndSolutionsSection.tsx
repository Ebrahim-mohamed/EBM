import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { SAndSBox } from "./SAndSBox";
import React from "react";

export function ServicesAndSolutionsSection() {
  const t = useTranslations(
    "ServiceAndSolutionsPage.servicesAndSolutionsSection"
  );
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        isBr
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="flex flex-col gap-[4rem]">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
          <SAndSBox
            key={num}
            button={t(`serviceButton${num}`)}
            des={t(`serviceDes${num}`)
              .split(" | ")
              .map((part, index, array) => (
                <span key={index}>
                  {part}
                  {index < array.length - 1 && <br />}
                </span>
              ))}
            header={t(`serviceHeader${num}`)}
            order={num}
            to={
              num === 1
                ? "fire-fighting"
                : num === 2
                ? "hvac"
                : num === 3
                ? "air-population"
                : "special-projects"
            }
          />
        ))}
      </div>
    </div>
  );
}
