import { useTranslations } from "next-intl";
import { Header } from "../Header";
import { MangerBox } from "./MangerBox";
const mangers = [
  { name: "mangerName", title: "jopTitle", img: "manger" },
  { name: "mangerName", title: "jopTitle", img: "manger" },
  { name: "mangerName", title: "jopTitle", img: "manger" },
  { name: "mangerName", title: "jopTitle", img: "manger" },
];
export function MangersSection() {
  const t = useTranslations("clientsAndPartnersPage.mangersSection");
  return (
    <div className="p-[var(--sectionPadding)]">
      <Header
        header={t.rich("header", {
          second: (chunk) => <span className=" text-[#A8CF38]">{chunk}</span>,
        })}
      />
      <div className="flex items-center justify-between w-full">
        {mangers.map((manger) => (
          <MangerBox
            name={t(manger.name)}
            title={t(manger.title)}
            img={manger.img}
            key={manger.name}
          />
        ))}
      </div>
    </div>
  );
}
