export default function AddPlaceItem() {
  return (
    <li className="flex h-[2.75rem] items-center gap-[0.3125rem] rounded-md bg-white pl-[0.5625rem]">
      <div className="flex h-[1.0625rem] w-[1.0625rem] items-center justify-center rounded-full bg-primary">
        <span className="text-[0.625rem] font-semibold text-white">1</span>
      </div>
      <span className="text-sm font-light text-contentsPrimary">장소명</span>
    </li>
  );
}
