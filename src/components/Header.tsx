import { headerType } from "@/types/globalTypes";
export function Header(headerProps: headerType) {
  return (
    <div
      className={`flex flex-col ${
        headerProps.isNotCenter ? "  " : " items-center "
      } justify-center gap-[0.5rem] mb-[3.5rem] w-full`}
    >
      <h1 className="text-white text-[4rem] font-black">
        {headerProps.header}
      </h1>
      {headerProps.pra && (
        <p className="text-white text-[1.5rem] font-[350]">{headerProps.pra}</p>
      )}
    </div>
  );
}
