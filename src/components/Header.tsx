import { headerType } from "@/types/globalTypes";
export function Header(headerProps: headerType) {
  return (
    <div
      className={`flex flex-col ${
        headerProps.isNotCenter ? "  " : " items-center "
      } justify-center gap-[0.5rem] mb-[5rem] w-full max-[500px]:mb-[3rem]`}
    >
      <div>
        <h1
          className={`text-white text-[4rem] font-black max-[1100px]:text-[3.5rem] max-[800px]:text-[2.5rem] max-[550px]:text-[2rem] ${
            headerProps.isNotCenter ? "  " : " text-center "
          }`}
        >
          {headerProps.header}
        </h1>
        {headerProps.isBr && (
          <div className="w-[6rem] h-[0.2rem] bg-white max-[550px]:hidden"></div>
        )}
      </div>
      {headerProps.pra && (
        <p
          className={`text-white text-[1.5rem] font-[350] max-[550px]:text-[1.2rem] ${
            headerProps.isNotCenter ? "  " : " text-center "
          } `}
        >
          {headerProps.pra}
        </p>
      )}
    </div>
  );
}
