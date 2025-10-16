import { endSectionType } from "@/types/globalTypes";
import { LinkButton } from "./LinkButton";

export function EndSection(endSectionProps: endSectionType) {
  return (
    <div
      className="py-[4.3rem] px-[6.25rem] flex items-center justify-center w-full gap-[1.5rem] bg-no-repeat bg-cover flex-col"
      style={{
        backgroundImage: `url(/${endSectionProps.pageName}/endSectionBg.png)`,
      }}
    >
      <h3 className="text-[4rem] text-white font-black text-center">
        {endSectionProps.header}
      </h3>
      <LinkButton name={endSectionProps.button} to={endSectionProps.to} />
    </div>
  );
}
