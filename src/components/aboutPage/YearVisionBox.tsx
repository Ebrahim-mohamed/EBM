import Image from "next/image";

export function YearVisionBox({
  content,
  header,
}: {
  content: string;
  header: string;
}) {
  return (
    <div className="flex items-center gap-[1.25rem]">
      <div className="rounded-full p-[0.8rem] bg-[#A8CF38] flex items-center justify-center min-w-[3.5rem] aspect-square">
        <Image
          alt="icon"
          width={200}
          height={200}
          src="/aboutPage/yearVisionIcon.png"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h2 className="text-[2rem] font-bold text-[#A8CF38]">{header}</h2>
        <p className="text-[1rem] font-normal text-white">{content}</p>
      </div>
    </div>
  );
}
