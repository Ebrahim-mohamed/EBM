import Image from "next/image";

export function SectorBox({ pra }: { pra: string }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-[1rem]">
      <Image
        alt="icon"
        width={300}
        height={300}
        src="/interiorArchitecturalPage/sectorIcon.png"
        className="w-[4.5rem] aspect-square"
      />
      <p className="text-[2.25rem] font-black text-white text-center">{pra}</p>
    </div>
  );
}
