import { useTranslations } from "next-intl";
import { Header } from "../Header";
import Image from "next/image";
import { SusBox } from "./SusBox";
const boxes1 = [
  { name: "responsible", number: 3 },
  { name: "products", number: 3 },
];
const boxes2 = [
  { name: "workplace", number: 4 },
  { name: "operations", number: 3 },
];
export function SustainabilitySection() {
  const t = useTranslations("aboutPage.sustainabilitySection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
        })}
        pra={t("des")}
      />
      <div className="flex w-full justify-between items-center max-[900px]:flex-col max-[900px]:gap-[2rem]">
        <div className="flex min-[800px]:flex-col gap-[3.25rem] max-w-[25rem] max-[900px]:max-w-full max-[550px]:flex-col">
          {boxes1.map((box) => (
            <SusBox name={box.name} max={box.number} key={box.name} />
          ))}
        </div>
        <Image
          alt="worker image"
          width={800}
          height={800}
          src="/aboutPage/worker.png"
          className="w-[24rem] aspect-[363.00/453.57]"
        />
        <div className="flex min-[800px]:flex-col gap-[3.5rem] max-w-[25rem] max-[900px]:max-w-full max-[550px]:flex-col">
          {boxes2.map((box) => (
            <SusBox name={box.name} max={box.number} key={box.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
