import { useTranslations } from "next-intl";
import { Header } from "../Header";
import Image from "next/image";
import { LinkButton } from "../LinkButton";

export function OffersSection() {
  const t = useTranslations("aboutPage.offersSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        isNotCenter
        header={t.rich("header", {
          second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="flex items-center">
        <Image
          alt="project image"
          width={400}
          height={400}
          src="/aboutPage/offerImage.png"
          className="w-[50%] max-[1220px]:w-[100%] max-[650px]:hidden"
        />
        <div className="p-[2rem] bg-[#111827] text-white rounded-[0.5rem] shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] flex flex-col gap-[2rem] items-start -ml-[8rem] max-[1220px]:-ml-[30rem] max-[650px]:ml-0">
          <div>
            <h1 className="text-[2.25rem] text-[#A8CF38] font-black max-[500px]:text-[2rem]">
              {t("secondHeader")}
            </h1>
            <p className=" text-[1.125rem] font-normal leading-[1.8rem] max-[500px]:text-[1rem]">
              {t("des")}
            </p>
          </div>
          <div>
            <h2 className="text-[1.25rem] font-black mb-[0.5rem]">
              {t("thirdHeader")}
            </h2>
            <ol>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                <li key={num}>
                  {num}.{t(`pra${num}`)}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <LinkButton name={t("button")} to="service-solution" />
          </div>
        </div>
      </div>
    </div>
  );
}
