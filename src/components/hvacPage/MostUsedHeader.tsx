import { useTranslations } from "next-intl";

export function MostUsedHeader({
  des,
  header,
}: {
  des: string;
  header: string;
}) {
  const t = useTranslations("hvacPage.hvacEquipments");
  return (
    <div className="flex flex-col items-center justify-center gap-[0.5rem] text-white text-[1.125rem] mb-[3rem]">
      <div className="flex flex-col items-center justify-center ">
        <p className="font-medium">{t("header")}</p>
        <h1 className=" text-[#A8CF38] text-[4rem] font-black max-[1000px]:text-[3rem] max-[800px]:text-[2.5rem]">
          {header}
        </h1>
      </div>
      <p className="text-center font-normal ">{des}</p>
    </div>
  );
}
