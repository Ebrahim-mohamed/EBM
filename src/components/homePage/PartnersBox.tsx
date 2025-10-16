import Image from "next/image";

export function PartnersBox({ img }: { img: string }) {
  return (
    <Image
      alt="partner image"
      width={200}
      height={200}
      src={`/homePage/partnersLogos/${img}.png`}
      className="w-[14rem] h-[4rem]"
    />
  );
}
