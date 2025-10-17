import { useTranslations } from "next-intl";
import Image from "next/image";

export function SusBox({ name, max }: { name: string; max: number }) {
  const t = useTranslations(`aboutPage.sustainabilitySection`);
  return (
    <div className=" flex gap-[1rem] items-center ">
      <Image
        alt="image"
        width={100}
        height={100}
        src={`/aboutPage/${name}.png`}
        className="w-[4.8rem] aspect-[77/75]"
      />
      <div className="text-white">
        <h2 className=" text-[1.2rem] font-black">{t(`${name}Header`)}</h2>
        <ul className="list-disc pl-6">
          {Array.from({ length: max }, (_, i) => i + 1).map((num) => (
            <li key={num} className="text-[1.125rem] font-normal">
              {t(`${name}Des${num}`)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
