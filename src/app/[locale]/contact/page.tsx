import { Hero } from "@/components/Hero";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const heroT = useTranslations("contactPage.heroSection");
  return (
    <div>
      <Hero
        isCenter
        header={heroT.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        location="contactPage"
      />
    </div>
  );
}
