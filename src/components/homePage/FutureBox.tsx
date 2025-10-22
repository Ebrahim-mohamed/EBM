export function FutureBox({ header, des }: { header: string; des: string }) {
  return (
    <div className="p-[1.5rem] bg-[#141E2C] rounded-[1rem] flex flex-col gap-[0.5rem] text-white text-[1.25rem] leading-[2rem]">
      <h1 className="font-black">{header}</h1>
      <p className="font-[350]">{des}</p>
    </div>
  );
}
