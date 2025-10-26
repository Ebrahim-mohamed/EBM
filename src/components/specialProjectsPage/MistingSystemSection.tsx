import { useTranslations } from "next-intl";
import Image from "next/image";

export function MistingSystemSection() {
  const t = useTranslations("specialProjectsPage.mistingSystemsSection");
  return (
    <div className="flex items-center justify-between w-full gap-[4rem] p-[var(--sectionPadding)] max-[750px]:flex-col-reverse">
      <div>
        <h1 className="text-[2.5rem] font-black text-[#A8CF38] mb-[2rem]">
          {t("header")}
        </h1>
        <div className="text-white text-[1.125rem] leading-[1.8rem] font-normal ">
          <p className="mb-[1rem]">{t("des")}</p>
          <div>
            <h2 className="font-medium">{t("secondHeader")}</h2>
            <ul className="list-disc pl-6">
              {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
                <li key={num}>{t(`point${num}`)}</li>
              ))}
            </ul>
            <p>{t("concPra")}</p>
          </div>
        </div>
      </div>
      <Image
        alt="image"
        width={500}
        height={500}
        src="/specialProjectsPage/misting.png"
        className="w-[60%] rounded-[0.5rem] border border-white max-[750px]:w-full"
      />
    </div>
  );
}
