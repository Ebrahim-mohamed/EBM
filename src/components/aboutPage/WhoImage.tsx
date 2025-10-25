import Image from "next/image";

export function WhoImage({ img }: { img: string }) {
  return (
    <Image
      alt="image"
      width={150}
      height={150}
      src={`/aboutPage/who${img}.png`}
      className="w-[16.8rem] aspect-square rounded-[1.5rem] border border-white max-[1220px]:w-full"
    />
  );
}
