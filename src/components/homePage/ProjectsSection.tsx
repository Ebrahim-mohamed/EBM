import { useTranslations } from "next-intl";
import { Header } from "../Header";

export function ProjectsSection() {
  const t = useTranslations("homePage.projectsSection");
  return (
    <div className="p-[var(--sectionPadding)] bg-[url('/homePage/projectDemo.png')] bg-no-repeat bg-cover">
      <div className="flex items-center">
        <div className="max-w-[30rem] text-center">
          <Header
            header={t.rich("header", {
              second: (chunk) => (
                <span className=" text-[#A8CF38]">{chunk}</span>
              ),
            })}
          />
        </div>
      </div>
    </div>
  );
}
