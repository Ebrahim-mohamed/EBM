import { projectBoxType } from "@/types/projectsPage/types";
import { useLocale } from "next-intl";

export function ProjectBox(projectProps: projectBoxType) {
  const locale = useLocale();
  return (
    <div
      className={`flex items-start justify-between w-full gap-[4rem]  max-[950px]:flex-col ${
        projectProps.order % 2 === 0 && " flex-row-reverse max-[950px]:flex-col"
      }`}
    >
      <div className="flex-1">
        <img
          src={
            projectProps.image
              ? `https://api.ebmksa.com/uploads/${projectProps.image}`
              : "/fallback.png"
          }
          alt="service image"
          className="w-full rounded-[0.5rem]"
        />
      </div>

      <div className="flex flex-col gap-[2rem] flex-1 items-start">
        <h1
          className={`${
            locale === "en" ? " border-l-[0.2rem] " : " border-r-[0.2rem] "
          } border-[#A8CF38] text-[#A8CF38] text-[2rem] font-bold px-[1rem]`}
        >
          {projectProps.header}
        </h1>
        <p className="text-white text-[1.125rem] font-normal leading-[1.8rem] ">
          {projectProps.des}
        </p>
      </div>
    </div>
  );
}
