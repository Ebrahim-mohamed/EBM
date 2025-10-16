import { serviceAndSolutionSectionBoxType } from "@/types/homePage/types";

export function ServiceAndSolutionSectionBox(
  service: serviceAndSolutionSectionBoxType
) {
  return (
    <div
      className="p-[2rem] flex flex-col justify-end gap-[1.5rem] text-white rounded-[1rem] min-w-[21rem] min-h-[25rem] bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(/homePage/projectDemo.png)` }}
    >
      <h2 className="text-[1.5rem] font-black">{service.header}</h2>
      <p className="text-[1rem] font-bold">{service.header}</p>
    </div>
  );
}
