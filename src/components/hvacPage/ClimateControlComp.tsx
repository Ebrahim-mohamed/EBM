import { useTranslations } from "next-intl";
import Image from "next/image";

export function ClimateControlComp({
  partName,
  imagesNumber,
}: {
  partName: string;
  imagesNumber: number;
}) {
  const t = useTranslations(`hvacPage.${partName}`);

  return (
    <div className="flex flex-col gap-[1rem] flex-1">
      <ul className="list-disc pl-6 text-white text-[1.125rem] font-normal leading-[1.8rem] ">
        <li className="text-[1.5rem] font-[350]">{t(`header`)}</li>
      </ul>
      {(partName === "cracUnitsSection" ||
        partName === "fanCollsUnitsSection") && (
        <p className="text-white text-[1.25rem] font-[350] mb-[1.5rem]">
          {t(`des`)}
        </p>
      )}
      <div className="flex gap-[1rem] mt-auto">
        {Array.from({ length: imagesNumber }, (_, i) => i + 1).map((num) => (
          <div
            key={num}
            className="relative flex-1 rounded-[0.5rem] overflow-hidden max-w-[10rem]"
          >
            <Image
              alt="image"
              width={400}
              height={400}
              src={`/hvacPage/HeatingAndDHWAndClimateControlSection/${partName}/${num}.png`}
              className="w-full"
            />
            {/* {partName !== "cracUnitsSection" &&
              partName !== "fanCollsUnitsSection" && (
                <p className="absolute top-1/2 left-1/2 -translate-1/2 text-white text-[1.7rem] font-medium leading-[1.8rem] text-center">
                  {t(`text${num}`)}
                </p>
              )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
