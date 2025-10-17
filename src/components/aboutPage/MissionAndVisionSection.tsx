import { VMBox } from "./VMBox";

export function MissionAndVisionSection() {
  const boxes = ["mission", "vision", "value"];
  return (
    <div className="p-[var(--sectionPadding)] bg-[url('/aboutPage/vAndMBg.png')] w-full  bg-no-repeat bg-contain flex items-center justify-center">
      <div className="flex gap-[2rem] items-stretch mt-[9rem]">
        {boxes.map((box) => (
          <VMBox name={box} key={box} />
        ))}
      </div>
    </div>
  );
}
