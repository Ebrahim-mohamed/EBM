import { heroType } from "@/types/globalTypes";

export function Hero(heroProps: heroType) {
  return (
    <div
      className={`h-dvh w-dvw flex items-center ${
        heroProps.isCenter && " justify-center "
      } gap-[2rem]`}
      style={{
        backgroundImage: `url(/${heroProps.location}/heroSectionBg.png)`,
      }}
    >
      <h1 className="text-[6rem] text-white font-black">{heroProps.header}</h1>
      {heroProps.pra && (
        <p className=" text-[1.5rem] font-[350] leading-[2.4rem]"></p>
      )}
    </div>
  );
}
