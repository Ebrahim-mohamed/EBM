import { useTranslations } from "next-intl";
import Image from "next/image";

export function AwardSection() {
  const t = useTranslations("clientsAndPartnersPage.awardSection");
  return (
    <div className="p-[var(--sectionPadding)] flex w-full items-center justify-between gap-[4rem] max-[950px]:flex-col">
      <Image
        alt="persons image"
        width={600}
        height={300}
        src="/clientsAndPartnersPage/persons.png"
        className="w-[45%] max-[950px]:w-full"
      />
      <div className="flex flex-col gap-[2rem] text-white font-black flex-1">
        <div>
          <h1 className="text-[#A8CF38] text-[1.5rem] ">{t("header")}</h1>
          <p className="text-[3rem]">
            {t.rich("des", {
              second: (chunk) => (
                <span className="text-[#A8CF38]">{chunk}</span>
              ),
            })}
          </p>
        </div>
        <p className="leading-[1.6rem] text-[1rem]">{t("content")}</p>
      </div>
    </div>
  );
}
