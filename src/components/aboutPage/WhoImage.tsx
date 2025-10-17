import Image from "next/image";

export function WhoImage({ img }: { img: string }) {
  return (
    <div>
      <Image
        alt="image"
        width={150}
        height={150}
        src={`/aboutPage/who${img}.png`}
        className="w-[16.8rem] h-[17rem] rounded-[1.5rem] border border-white"
      />
    </div>
  );
}
