export default function PlacePlan({ hotelList, index }) {
  console.log(hotelList);
  console.log(index);

  return (
    <div className="mx-5 mt-4 flex flex-col gap-[10px]">
      {hotelList?.map((item, index) => (
        <div
          key={index}
          className="flex h-[3.875rem] items-center gap-2 bg-white px-[0.625rem]"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-semibold text-white">
              {index + 1}
            </span>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-contentsPrimary">{item.place_name}</p>
            <p className="text-sm text-contentsSecondary">
              {item.address_name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
