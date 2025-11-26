import { endSectionType } from "@/types/globalTypes";
import { LinkButton } from "./LinkButton";
import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";
import { DownloadButton } from "./DownloadButton";

export function EndSection(endSectionProps: endSectionType) {
  const locale = useLocale();
  return (
    <div
      className="py-[4.3rem] px-[6.25rem] flex items-center justify-center w-full gap-[1.5rem] bg-no-repeat bg-cover  bg-center flex-col"
      style={{
        backgroundImage: `url(/${endSectionProps.pageName}/endSectionBg.png)`,
      }}
    >
      <h3 className="text-[4rem] text-white font-black text-center max-[1000px]:text-[3rem] max-[700px]:text-[2.5rem] max-[550px]:text-[2rem]">
        {endSectionProps.header}
      </h3>
      <div className="flex gap-[1rem] items-center justify-center w-full max-[420px]:flex-col">
        <LinkButton name={endSectionProps.button} to={endSectionProps.to} />
        <DownloadButton />
      </div>
    </div>
  );
}
