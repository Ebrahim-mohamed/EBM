import Image from "next/image";

export function StoryPra({ text }: { text: string }) {
  return (
    <div className="w-[80%] flex items-start justify-start gap-[0.5rem] max-[550px]:w-full">
      <Image
        alt="star icon"
        width={30}
        height={30}
        src="/homePage/storyIcon.png"
        className="w-[2rem] h-auto mt-[0.3rem] max-[550px]:w-[3rem]"
      />
      <h2 className="text-[1rem] text-white font-[350] ">{text}</h2>
    </div>
  );
}
