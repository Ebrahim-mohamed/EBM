import { useTranslations } from "next-intl";
import { Header } from "../Header";

export function StorySection() {
  const t = useTranslations("aboutPage.storySection");
  return (
    <div className="p-[var(--sectionPadding)] flex items-center justify-between gap-[5rem] max-[850px]:flex-col max-[850px]:gap-0 ">
      <div>
        <Header
          isBr
          isNotCenter
          header={t.rich("header", {
            second: (chunk) => <span className="text-[#A8CF38]">{chunk}</span>,
          })}
        />
      </div>
      <p className="text-white text-[1.125rem] font-[350] flex-1">
        {t.rich("des", {
          second: (chuck) => <span className="text-[#A8CF38]">{chuck}</span>,
        })}
      </p>
    </div>
  );
}
