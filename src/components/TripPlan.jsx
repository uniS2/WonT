export default function TripPlan() {
  return (
    <div className=" bg-secondary/50 px-6 py-[1.125rem]">
      <div className="mx-auto flex max-w-[1280px] justify-between gap-[0.125rem]">
        <span className="text-base text-contentsPrimary">제주도</span>
        <button
          type="button"
          className=" text-xs text-gray-1 underline underline-offset-2"
        >
          편집
        </button>
      </div>
      <div className="mx-auto flex max-w-[1280px] justify-between">
        <span className="text-base font-light text-contentsSecondary">
          2023.10.10 - 2023.10.20
        </span>
        <button
          type="button"
          className=" text-xs text-gray-1 underline underline-offset-2"
        >
          편집
        </button>
      </div>
    </div>
  );
}
