import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { FutureBox } from "./FutureBox";
import Image from "next/image";

export function FutureSection() {
  const t = useTranslations("homePage.futureSection");
  return (
    <div className="p-[var(--sectionPadding)]  flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <Header
          header={t.rich("header", {
            second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
          })}
          pra={t("des")}
          isNotCenter
        />
        <div className="flex gap-[2rem] items-stretch justify-center ">
          <div>
            <div className="relative flex flex-col justify-between h-[87%] mt-[0.8rem]">
              <div className=" absolute w-[0.07rem] h-full  bg-[#4082BF] left-1/2"></div>
              {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
                <div
                  className="rounded-full border-[3px] border-[#4082BF] flex items-center justify-center p-[0.5rem] z-20 bg-[#0D0C10]"
                  key={num}
                >
                  <Image
                    alt="icon"
                    width={200}
                    height={200}
                    src="/homePage/elec.png"
                    className="w-[4rem] aspect-square"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[2rem] ">
            {Array.from({ length: 4 }, (_, i) => i + 1).map((num) => (
              <FutureBox
                key={num}
                header={t(`head${num}`)}
                des={t(`pra${num}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
