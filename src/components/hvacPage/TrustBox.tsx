import Image from "next/image";

export function TrustBox({ img }: { img: string }) {
  return (
    <Image
      alt="partner image"
      width={200}
      height={200}
      src={`/hvacPage/trustLogos/${img}.png`}
      className="w-full max-[650px]:min-w-[9rem]"
    />
  );
}
