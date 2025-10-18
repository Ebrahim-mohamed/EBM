import Image from "next/image";
import Link from "next/link";

export function FooterIcon({ name }: { name: string }) {
  return (
    <Link href="#">
      <Image
        alt="social media icon"
        width={100}
        height={100}
        src={`/footer/${name}.png`}
        className="w-[2rem]"
      />
    </Link>
  );
}
