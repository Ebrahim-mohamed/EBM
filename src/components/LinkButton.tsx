import { useLocale } from "next-intl";
import Link from "next/link";

export function LinkButton({
  name,
  to,
  isBlack,
}: {
  name: string;
  to: string;
  isBlack?: boolean;
}) {
  const locale = useLocale();
  return (
    <Link
      href={`/${locale}/${to}`}
      className={`px-[1rem] py-[0.5rem] ${
        isBlack ? " bg-[#29303A] " : " bg-[#4082BF] "
      } text-white text-[1.125rem] font-medium rounded-[0.5rem] w-fit self-center`}
    >
      {name}
    </Link>
  );
}
