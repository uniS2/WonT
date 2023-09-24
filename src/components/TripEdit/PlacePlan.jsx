export default function PlacePlan({ text }) {
  return (
    <div className="mx-5 mt-4 flex flex-col gap-[10px]">
      <div className="flex h-[52px] items-center gap-2 bg-white px-[10px]">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary"></div>
        <p className="font-bold text-contentsPrimary">{text}를 추가해주세요.</p>
      </div>
    </div>
  );
}
