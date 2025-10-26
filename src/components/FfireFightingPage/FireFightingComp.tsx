import { fireFightingPropsType } from "@/types/FireFightingPage/types";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function FireFightingComp(props: fireFightingPropsType) {
  const t = useTranslations(`fireFightingPage.${props.location}`);
  return (
    <div className="p-[var(--sectionPadding)] flex gap-[1rem] justify-between max-[950px]:flex-col">
      <div className="flex flex-col gap-[2.5rem] flex-1">
        <h1 className="text-[#A8CF38] text-[4rem] font-black leading-[3.125rem] max-[1000px]:text-[3rem]">
          {t("header1")}
        </h1>
        <p className="text-[1.125rem] font-normal text-white leading-[1.8rem]">
          {t("pra1")}
        </p>
        <div className="flex gap-[1rem]">
          {props.location !== "smokeFansSection" &&
            Array.from({ length: 2 }, (_, i) => i + 1).map((num) => (
              <div key={num} className="flex-1 relative">
                <Image
                  alt="image"
                  width={500}
                  height={500}
                  src={`/fireFightingPage/${props.location}/main${num}.png`}
                  className="w-full"
                />
                <p className="absolute bottom-10 left-6 text-white text-[1.5rem] font-medium leading-[1.8rem] text-center max-[950px]:text-[1.2rem] max-[950px]:left-1/2 max-[950px]:-translate-x-1/2 max-[400px]:hidden">
                  {t(`text${num}`)}
                </p>
              </div>
            ))}
          {props.location === "smokeFansSection" &&
            Array.from({ length: 2 }, (_, i) => i + 1).map((num) => (
              <div
                key={num}
                className="flex w-[30%] items-center justify-center p-[1rem] bg-white relative rounded-[0.5rem]"
              >
                <div className="absolute top-0 left-0 h-full w-full bg-[#0005]"></div>
                <Image
                  alt="image"
                  width={500}
                  height={500}
                  src={`/fireFightingPage/${props.location}/main${num}.png`}
                  className="w-[7.75rem] aspect-[124/143]"
                />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-[1.5rem] font-medium leading-[1.8rem] text-center z-20 max-[950px]:text-[1.2] max-[400px]:hidden">
                  {t(`text${num}`)}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-[#111827] p-[1.5rem] max-w-[27.3rem] ">
        <div className="mb-[1rem]">
          <h2 className="text-[#A8CF38] text-[1.5rem] font-black leading-[3.125rem] max-[950px]:text-[1.2rem]">
            {t("header2")}
          </h2>
          {(props.location === "smokeSection" ||
            props.location === "smokeFansSection") && (
            <p className="text-[1.125rem] font-normal text-white leading-[1.8rem]">
              {t("pra2")}
            </p>
          )}
        </div>
        <div className="bg-[#FFFFFFCC] rounded-[0.5rem] p-[2rem]">
          {props.location === "smokeSection" && (
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <Image
                alt="icon"
                width={100}
                height={100}
                src="/fireFightingPage/smokeSection/1.png"
              />
              <div className="grid grid-cols-6 justify-between w-full gap-[0.5rem] justify-self-center items-center">
                {Array.from({ length: 12 }, (_, i) => i + 2).map((num) => (
                  <Image
                    alt="image"
                    width={500}
                    height={500}
                    key={num}
                    src={`/fireFightingPage/smokeSection/${num}.png`}
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          )}
          {props.location === "smokeFansSection" && (
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <div className="flex items-center justify-center gap-[1rem]">
                <Image
                  alt="icon"
                  width={100}
                  height={100}
                  src="/fireFightingPage/smokeFansSection/1.png"
                />
                <Image
                  alt="icon"
                  width={100}
                  height={100}
                  src="/fireFightingPage/smokeFansSection/2.png"
                />
              </div>
              <div className="grid grid-cols-4 justify-center w-full gap-[1.5rem] justify-self-center items-center">
                {Array.from({ length: 4 }, (_, i) => i + 3).map((num) => (
                  <Image
                    alt="image"
                    width={500}
                    height={500}
                    key={num}
                    src={`/fireFightingPage/smokeFansSection/${num}.png`}
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          )}
          {props.location === "fireShutterSection" && (
            <div className="flex flex-col items-center justify-center gap-[1rem]">
              <div className="grid grid-cols-3 justify-center w-full gap-[1.5rem] justify-self-center items-center">
                {Array.from({ length: 9 }, (_, i) => i + 2).map((num) => (
                  <Image
                    alt="image"
                    width={500}
                    height={500}
                    key={num}
                    src={`/fireFightingPage/fireShutterSection/${num}.png`}
                    className="w-full"
                  />
                ))}
              </div>
              <Image
                alt="icon"
                width={100}
                height={100}
                src="/fireFightingPage/fireShutterSection/1.png"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
