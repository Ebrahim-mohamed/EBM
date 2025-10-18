import Image from "next/image";
import { LinkButton } from "../LinkButton";
import { SAndSBoxType } from "@/types/ServicesAndSolutionsPage/types";

export function SAndSBox(sASProps: SAndSBoxType) {
  return (
    <div
      className={`flex items-start justify-between w-full gap-[4rem]  ${
        sASProps.order % 2 === 0 && " flex-row-reverse "
      }`}
    >
      <Image
        alt="service image"
        width={300}
        height={300}
        src={`/ServicesAndSolutionsPage/service${sASProps.order}.png`}
        className="w-[50%] rounded-[0.5rem]"
      />
      <div className="flex flex-col gap-[2rem] flex-1 items-start">
        <h1 className="border-l-[0.2rem] border-[#A8CF38] text-[#A8CF38] text-[2rem] font-bold px-[1rem]">
          {sASProps.header}
        </h1>
        <p className="text-white text-[1.125rem] font-normal leading-[1.8rem] ">
          {sASProps.des}
        </p>
        <div>
          <LinkButton name={sASProps.button} to={sASProps.to} />
        </div>
      </div>
    </div>
  );
}
