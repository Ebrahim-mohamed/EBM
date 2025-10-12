import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return <h1 className="text-[3rem] text-red-600">{t("title")}</h1>;
}
