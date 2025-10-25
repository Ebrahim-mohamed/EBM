import Image from "next/image";
import { projectBoxType } from "@/types/projectsPage/types";

export function ProjectBox(projectProps: projectBoxType) {
  return (
    <div
      className={`flex items-start justify-between w-full gap-[4rem]  max-[950px]:flex-col ${
        projectProps.order % 2 === 0 && " flex-row-reverse max-[950px]:flex-col"
      }`}
    >
      <Image
        alt="service image"
        width={300}
        height={300}
        src={`/ServicesAndSolutionsPage/service1.png`}
        className="w-[40%] rounded-[0.5rem] max-[950px]:w-full"
      />
      <div className="flex flex-col gap-[2rem] flex-1 items-start">
        <h1 className="border-l-[0.2rem] border-[#A8CF38] text-[#A8CF38] text-[2rem] font-bold px-[1rem]">
          {projectProps.header}
        </h1>
        <p className="text-white text-[1.125rem] font-normal leading-[1.8rem] ">
          {projectProps.des}
        </p>
      </div>
    </div>
  );
}
