import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { WhoImage } from "./WhoImage";

export function WhoSection() {
  const t = useTranslations("aboutPage.whoSection");
  return (
    <div className="p-[var(--sectionPadding)] flex items-start justify-between gap-[5rem] max-[1220px]:flex-col-reverse w-full max-[1220px]:items-center">
      <div className="max-w-[38rem] flex flex-col text-white text-[1.125rem] font-[350]">
        <Header
          isNotCenter
          isBr
          header={t.rich("header", {
            second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
          })}
          pra={t("des")}
        />
        <p className="mb-[1.5rem] leading-[1.8rem]">{t("pra")}</p>
      </div>
      <div className="flex-1 flex h-full gap-[1rem] justify-end max-[1220px]:flex-col max-[1220px]:w-[80%] ">
        <div className="flex min-[1220px]:flex-col gap-[1rem] mt-[4rem] max-[1220px]:mt-0 ">
          <WhoImage img="1" />
          <WhoImage img="2" />
        </div>
        <div className="flex min-[1220px]:flex-col gap-[1rem] ">
          <WhoImage img="3" />
          <WhoImage img="4" />
        </div>
      </div>
    </div>
  );
}
