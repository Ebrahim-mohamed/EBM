import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { PartnersBox } from "./PartnersBox";
import { LinkButton } from "../LinkButton";

export function PartnersSection({
  isNotHomePage,
}: {
  isNotHomePage?: boolean;
}) {
  const t = useTranslations("homePage.partnersSection");
  return (
    <div className="p-[var(--sectionPadding)] flex flex-col items-center justify-center">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="grid grid-cols-4 gap-[4rem] items-center justify-center justify-self-center mb-[5rem]">
        {Array.from({ length: 16 }, (_, i) => i + 1).map((num) => (
          <PartnersBox key={num.toString()} img={num.toString()} />
        ))}
      </div>
      {!isNotHomePage && (
        <LinkButton name={t("button")} to="clients-partners" />
      )}
    </div>
  );
}
