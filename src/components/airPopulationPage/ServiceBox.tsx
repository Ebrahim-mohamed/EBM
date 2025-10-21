import { useTranslations } from "next-intl";
import Image from "next/image";

export function ServiceBox({ serviceNum }: { serviceNum: number }) {
  const t = useTranslations(
    `airPopulationPage.solutionsAndServicesSection.service${serviceNum}`
  );
  return (
    <div
      className={`flex items-start justify-between w-full gap-[4rem]  ${
        serviceNum % 2 === 0 && " flex-row-reverse "
      }`}
    >
      <div className="flex flex-1 items-stretch gap-[1rem]">
        <Image
          alt="service image"
          width={300}
          height={300}
          src={`/airPopulationPage/service${serviceNum}/1.png`}
          className="flex-1 rounded-[0.5rem] border border-white"
        />
        <div className="flex-1 flex flex-col gap-[1rem]">
          {Array.from({ length: 2 }, (_, i) => i + 2).map((num) => (
            <Image
              key={num}
              alt="service image"
              width={300}
              height={300}
              src={`/airPopulationPage/service${serviceNum}/${num}.png`}
              className="flex-1 rounded-[0.5rem] border border-white"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] items-start flex-1">
        <h1 className="border-l-[0.2rem] border-[#A8CF38] text-[#A8CF38] text-[2rem] font-bold px-[1rem]">
          {t("header")}
        </h1>
        <p className="text-white text-[1.125rem] font-normal leading-[1.8rem] ">
          {t("des")}
        </p>
        <ul className="list-disc pl-6 text-white text-[1.125rem] font-normal leading-[1.8rem] ">
          {Array.from({ length: serviceNum + 2 }, (_, i) => i + 1).map(
            (num) => (
              <li key={num} className="text-[1.125rem] font-normal">
                {t(`point${num}`)}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
