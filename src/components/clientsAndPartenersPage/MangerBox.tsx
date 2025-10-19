import Image from "next/image";

export function MangerBox({
  img,
  name,
  title,
}: {
  img: string;
  name: string;
  title: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-[0.2rem]">
      <Image
        alt="person image"
        width={300}
        height={300}
        src={`/clientsAndPartnersPage/${img}.png`}
        className="flex-1 border-l border-l-[#A8CF38] rounded-full p-[0.4rem]"
      />
      <div className="text-white font-[350] text-center">
        <h2 className="text-[2.25rem]">{name}</h2>
        <p className="text-[1.5rem]">{title}</p>
      </div>
    </div>
  );
}
