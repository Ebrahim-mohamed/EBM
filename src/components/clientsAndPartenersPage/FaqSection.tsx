import { useTranslations } from "next-intl";
import { Accordion } from "../ui/accordion";
import { AccordionItemComp } from "./AccordionItem";

export function FaqSection() {
  const t = useTranslations("clientsAndPartnersPage.faqSection");
  return (
    <div className="p-[var(--sectionPadding)] bg-[#0D1421] flex w-full justify-between items-center gap-[5rem] max-[950px]:flex-col">
      <div className="text-white w-full">
        <h1 className="text-[4rem] font-black mb-[0.6rem]">
          {t.rich("header", {
            second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
          })}
        </h1>
        <p className="text-[1.5rem] font-medium leading-[2.4rem]">{t("des")}</p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full text-white font-bold leading-[1.25rem] "
      >
        {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
          <AccordionItemComp num={num} key={num} />
        ))}
      </Accordion>
    </div>
  );
}
