import { useTranslations } from "next-intl";
import { Header } from "../Header";
import Image from "next/image";
import { StoryPra } from "./StoryPra";
import { LinkButton } from "../LinkButton";
const pras = ["pra1", "pra2", "pra3"];
export function StorySection() {
  const t = useTranslations("homePage.storySection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
        pra={t("des")}
      />
      <div className="flex gap-[4rem]">
        <div className="flex flex-col gap-[2rem]">
          <h2 className="text-[1rem] text-white font-[350] ">
            {t("secondHeader")}
          </h2>
          <div className="flex flex-col gap-[2rem]">
            {pras.map((pra) => (
              <StoryPra text={t(pra)} key={pra} />
            ))}
          </div>

          <LinkButton name={t("button")} to="about" />
        </div>
        <Image
          alt="story image"
          width={300}
          height={300}
          src="/homePage/story.png"
          className="w-[70%] aspect-[512/653] rounded-[1.5rem]"
        />
      </div>
    </div>
  );
}
