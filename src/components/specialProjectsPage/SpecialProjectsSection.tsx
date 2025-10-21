import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { SpecialProjectsSectionBox } from "./SpecialProjectsSectionBox";

export function SpecialProjectsSection() {
  const t = useTranslations("specialProjectsPage.specialProductsSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="flex flex-col items-center justify-center gap-[7rem]">
        {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
          <SpecialProjectsSectionBox key={num} projectNum={num} />
        ))}
      </div>
    </div>
  );
}
