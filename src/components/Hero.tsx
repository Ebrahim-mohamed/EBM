import { heroType } from "@/types/globalTypes";
import { LinkButton } from "./LinkButton";

export function Hero(heroProps: heroType) {
  return (
    <div
      className={` p-[var(--sectionPadding)] h-dvh w-dvw flex flex-col items-center bg-no-repeat bg-cover ${
        heroProps.isCenter
          ? " justify-center items-center "
          : " justify-end items-start"
      } gap-[1rem]`}
      style={{
        backgroundImage: `url(/${heroProps.location}/heroSectionBg.png)`,
      }}
    >
      <h1 className="text-[6rem] text-white font-black leading-[120%]">
        {heroProps.header}
      </h1>
      {heroProps.pra && (
        <p className=" text-[1.5rem] font-[350] leading-[2.4rem] text-white">
          {heroProps.pra}
        </p>
      )}
      {heroProps.button1 && heroProps.to1 && (
        <div className="flex items-center justify-center gap-[1.5rem]">
          <LinkButton name={heroProps.button1} to={heroProps.to1} />
          {heroProps.button2 && heroProps.to2 && (
            <LinkButton name={heroProps.button2} to={heroProps.to2} />
          )}
        </div>
      )}
    </div>
  );
}
