import { LinkButton } from "./LinkButton";
import { secondSectionPropsType } from "@/types/FireFightingPage/types";

export function SectionTowSecondaryPages(props: secondSectionPropsType) {
  return (
    <div
      className="py-[5rem] px-[15rem] flex items-center justify-center w-full gap-[1.5rem] bg-no-repeat bg-cover  bg-center flex-col"
      style={{
        backgroundImage: `url(/${props.pageName}/secondBg.png)`,
      }}
    >
      <h3 className="text-[2.25rem] text-[#A8CF38] font-black text-center">
        {props.header}
      </h3>
      <p className="text-[1.125rem] text-white font-[350] leading-[1.8rem] text-center">
        {props.pra}
      </p>
      <LinkButton name={props.button} to={props.to} />
    </div>
  );
}
