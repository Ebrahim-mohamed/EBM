import { useTranslations } from "next-intl";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export function AccordionItemComp({ num }: { num: number }) {
  const t = useTranslations("clientsAndPartnersPage.faqSection");
  return (
    <AccordionItem
      value={`item-${num}`}
      className={`px-[1rem] py-[0.5rem] border border-[#DEDEE0] rounded-[0.5rem] ${
        num !== 5 ? "mb-[1.5rem]" : ""
      }`}
    >
      <AccordionTrigger className="text-[1.25rem]">
        {t(`que${num}`)}
      </AccordionTrigger>
      <AccordionContent className="text-[1rem] font-medium">
        {t(`ans${num}`)}
      </AccordionContent>
    </AccordionItem>
  );
}
