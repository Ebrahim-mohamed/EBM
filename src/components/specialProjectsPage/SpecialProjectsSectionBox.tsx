import Image from "next/image";
import { useTranslations } from "next-intl";

export function SpecialProjectsSectionBox({
  projectNum,
}: {
  projectNum: number;
}) {
  const t = useTranslations(
    `specialProjectsPage.specialProductsSection.project${projectNum}`
  );
  return (
    <div
      className={`flex items-start justify-between w-full gap-[4rem] max-[750px]:flex-col-reverse`}
    >
      <div className="flex flex-col gap-[2rem] flex-1 items-start">
        <h1 className="border-l-[0.2rem] border-[#A8CF38] text-[#A8CF38] text-[2rem] font-bold px-[1rem]">
          {t("header")}
        </h1>
        <div className="text-white text-[1.125rem] font-normal leading-[1.8rem] ">
          <p>{t("des")}</p>
          <ul className="list-disc pl-6">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
              <li key={num}>{t(`point${num}`)}</li>
            ))}
          </ul>
        </div>
      </div>
      <Image
        alt="service image"
        width={300}
        height={300}
        src={`/specialProjectsPage/special${projectNum}.png`}
        className="w-[50%] rounded-[0.5rem] border border-white max-[750px]:w-full"
      />
    </div>
  );
}
