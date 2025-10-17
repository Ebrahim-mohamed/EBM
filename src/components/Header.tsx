import { headerType } from "@/types/globalTypes";
export function Header(headerProps: headerType) {
  return (
    <div
      className={`flex flex-col ${
        headerProps.isNotCenter ? "  " : " items-center "
      } justify-center gap-[0.5rem] mb-[3rem] w-full`}
    >
      <h1 className="text-white text-[4rem] font-black">
        {headerProps.header}
      </h1>
      {headerProps.isBr && <div className="w-[6rem] h-[0.2rem] bg-white"></div>}
      {headerProps.pra && (
        <p className="text-white text-[1.5rem] font-[350]">{headerProps.pra}</p>
      )}
    </div>
  );
}
