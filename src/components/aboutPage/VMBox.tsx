import { useTranslations } from "next-intl";
import Image from "next/image";

export function VMBox({ name }: { name: string }) {
  const t = useTranslations("aboutPage.visionAndMissionSection");
  return (
    <div
      className={`p-[3rem] max-w-[24rem] ${
        name === "vision"
          ? " bg-[#A8CF38] text-[#1C174A] "
          : " bg-[#111827] text-white "
      } flex flex-col gap-[1rem] text-[1.125rem] items-start justify-start`}
    >
      <Image
        alt="vAndm image"
        src={`/aboutPage/${name}.png`}
        width={300}
        height={300}
        className="w-[3.125rem] aspect-square"
      />
      <h1 className=" font-black">{t(`${name}Header`)}</h1>
      <p className="font-normal leading-[1.4rem]">{t(`${name}Des`)}</p>
    </div>
  );
}
