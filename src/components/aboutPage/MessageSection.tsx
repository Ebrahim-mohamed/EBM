import { useTranslations } from "next-intl";
import { Header } from "../Header";
import Image from "next/image";

export function MessageSection() {
  const t = useTranslations("aboutPage.messageSection");
  return (
    <div className="p-[var(--sectionPadding)] flex items-start justify-between gap-[5rem]">
      <div className="flex-1">
        <Image
          alt="message image"
          width={800}
          height={800}
          className="w-full"
          src="/aboutPage/message.png"
        />
      </div>
      <div className="max-w-[45rem] flex flex-col text-white text-[1.125rem] font-[350]">
        <Header
          isNotCenter
          header={t.rich("header", {
            second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
          })}
          pra={t("des")}
        />

        <div className=" leading-[1.8rem] mb-[1rem]">
          <p className="mb-[1.5rem]">{t("pra1")}</p>
          <p>{t("pra2")}</p>
        </div>
        <div>
          <p>{t("person")}</p>
          <p>{t("jop")}</p>
          <p>{t("signature")}</p>
        </div>
      </div>
    </div>
  );
}
