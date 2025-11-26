import { useLocale, useTranslations } from "next-intl";
import { Header } from "../Header";
import Image from "next/image";
import { StoryPra } from "./StoryPra";
import { LinkButton } from "../LinkButton";
import { DownloadButton } from "../DownloadButton";
const pras = ["pra1", "pra2", "pra3"];
export function StorySection() {
  const t = useTranslations("homePage.storySection");
  const locale = useLocale();
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        pra={t("des")}
      />
      <div className="flex gap-[4rem] items-center max-[800px]:flex-col">
        <div className="flex flex-col gap-[2rem] justify-start ">
          <h2 className="text-[1rem] text-white font-[350] ">
            {t("secondHeader")}
          </h2>
          <div className="flex flex-col gap-[2rem]">
            {pras.map((pra) => (
              <StoryPra text={t(pra)} key={pra} />
            ))}
          </div>
          <div className="flex gap-[1rem] w-full max-[420px]:flex-col">
            <LinkButton name={t("button")} to="about" />
            <DownloadButton />
          </div>
        </div>

        <Image
          alt="story image"
          width={300}
          height={300}
          src="/homePage/story.jpg"
          className="w-[70%]  rounded-[1.5rem] max-[1300px]:w-[100%] max-[1100px]:w-[130%]"
        />
      </div>
    </div>
  );
}
