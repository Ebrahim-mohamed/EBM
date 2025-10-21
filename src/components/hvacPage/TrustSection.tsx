import { useTranslations } from "next-intl";
import { Header } from "../Header";

import { TrustBox } from "./TrustBox";

export function TrustSection() {
  const t = useTranslations("hvacPage.trustSection");
  return (
    <div className="p-[var(--sectionPadding)] flex flex-col items-center justify-center">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="grid grid-cols-4 gap-[4rem] items-center justify-center justify-self-center mb-[5rem]">
        {Array.from({ length: 8 }, (_, i) => i + 1).map((num) => (
          <TrustBox key={num.toString()} img={num.toString()} />
        ))}
      </div>
    </div>
  );
}
