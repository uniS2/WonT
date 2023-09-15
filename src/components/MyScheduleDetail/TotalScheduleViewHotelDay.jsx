export default function TotalScheduleHotelDay({ day = 1 }) {
  return (
    <div className="w-fit rounded-full bg-point px-4 py-[0.375rem] text-xs font-medium text-background">
      Day
      <span className="px-1">{day}</span>
    </div>
  );
}
