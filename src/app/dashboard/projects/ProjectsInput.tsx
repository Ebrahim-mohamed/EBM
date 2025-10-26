export function ProjectInput({
  label,
  errorMessage,
  place,
  type,
  ...props
}: {
  label: string;
  errorMessage?: string;
  place: string;
  type?: string;
}) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-[0.5rem] relative">
      <label className="text-black text-[1rem] font-normal">{label}</label>
      <input
        {...props}
        type={type}
        placeholder={place}
        className="bg-[#A0ACB440] placeholder:font-bold placeholder:text-[1.2rem] placeholder:text-[#959CA080] w-full outline-0 focus:outline-0 border-[#A0ACB4] border rounded-[0.5rem] p-[1rem] backdrop-blur-[20px] text-black"
      />
      {errorMessage && (
        <p className="absolute bottom-[-1.5rem] left-0  text-red-800 font-medium text-[1rem]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
