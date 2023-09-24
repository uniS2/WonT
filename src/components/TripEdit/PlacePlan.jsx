export default function PlacePlan({ placeName, count }) {
  return (
    <div className="mx-5 mt-4 flex flex-col gap-[10px]">
      <div className="flex h-[52px] items-center gap-2 bg-white px-[10px]">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
          <span className="text-sm font-semibold text-white">{count}</span>
        </div>
        <p className="font-bold text-contentsPrimary">{placeName}</p>
      </div>
    </div>
  );
}
