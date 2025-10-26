import Image from "next/image";

export function PartnersBox({ img }: { img: string }) {
  return (
    <Image
      alt="partner image"
      width={400}
      height={200}
      src={`/homePage/partnersLogos/${img}.png`}
      className="w-full max-[650px]:min-w-[9rem]"
    />
  );
}
