export function Input({
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
      <label className="text-white text-[1rem] font-normal">{label}</label>
      {label === "Message" ? (
        <textarea
          {...props}
          placeholder={place}
          className=" bg-[#A0ACB440] placeholder:font-normal placeholder:text-[1.1rem] placeholder:text-[#959CA080] w-full outline-0 focus:outline-0 max-h-[10rem] min-h-[7rem] border-[#A0ACB4] border rounded-[0.5rem] p-[1.5rem] backdrop-blur-[20px] text-white"
        />
      ) : (
        <input
          {...props}
          type={type}
          placeholder={place}
          className="bg-[#A0ACB440] placeholder:font-normal placeholder:text-[1.1rem] placeholder:text-[#959CA080] w-full outline-0 focus:outline-0 border-[#A0ACB4] border rounded-[0.5rem] p-[1.5rem] backdrop-blur-[20px] text-white"
        />
      )}
      {errorMessage && (
        <p className="absolute bottom-[-1.5rem] left-0  text-red-300 font-medium text-[0.9rem]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
