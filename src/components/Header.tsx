import { headerType } from "@/types/globalTypes";
import { useTranslations } from "next-intl";

export function Header(headerProps: headerType) {
  const t = useTranslations(
    `${headerProps.pageName}.${headerProps.sectionName}`
  );
  return (
    <div
      className={`flex flex-col ${
        headerProps.isNotCenter ? "  " : " items-center "
      } justify-center gap-[0.5rem] mb-[3.5rem] w-full`}
    >
      <h1 className="text-white text-[4rem] font-black">
        {t.rich(headerProps.header, {
          second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
        })}
      </h1>
      {headerProps.pra && (
        <p className="text-white text-[1.5rem] font-[350]">
          {t(headerProps.pra)}
        </p>
      )}
    </div>
  );
}
