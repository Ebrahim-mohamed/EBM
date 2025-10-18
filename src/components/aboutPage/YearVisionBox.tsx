import Image from "next/image";

export function YearVisionBox({ content }: { content: string }) {
  return (
    <div className="flex items-center gap-[1.25rem]">
      <div className="rounded-full p-[0.8rem] bg-[#A8CF38] flex items-center justify-center">
        <Image
          alt="icon"
          width={200}
          height={200}
          src="/aboutPage/yearVisionIcon.png"
          className="w-[1.5rem] aspect-square"
        />
      </div>
      <p className="text-[1rem] font-normal text-white">{content}</p>
    </div>
  );
}
