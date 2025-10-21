import Image from "next/image";

export function TrustBox({ img }: { img: string }) {
  return (
    <Image
      alt="partner image"
      width={200}
      height={200}
      src={`/hvacPage/trustLogos/${img}.png`}
      className="w-[14rem] h-[4rem]"
    />
  );
}
