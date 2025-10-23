import Image from "next/image";
import Link from "next/link";

export function FooterIcon({ name, to }: { name: string; to: string }) {
  return (
    <Link href={to}>
      <Image
        alt="social media icon"
        width={100}
        height={100}
        src={`/footer/${name}.svg`}
        className="w-[1.5rem] aspect-square"
      />
    </Link>
  );
}
