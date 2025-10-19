import Image from "next/image";
export function ContactInformationFormTab({
  header,
  pra,
  image,
}: {
  header: string;
  pra: string;
  image: string;
}) {
  return (
    <div className="flex items-start gap-[0.5rem]">
      <Image
        alt="icon"
        width={100}
        height={100}
        src={`/contactPage/${image}.png`}
        className="w-[1.5rem] mt-[0.2rem]"
      />
      <div className="text-white">
        <h2 className="text-[1.25rem] font-bold">{header}</h2>
        <p className="text-[1rem] font-[400] leading-[1.6rem]">{pra}</p>
      </div>
    </div>
  );
}
