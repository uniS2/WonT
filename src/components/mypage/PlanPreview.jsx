import useScheduleList from '@/hooks/useScheduleList';
import { getPocketHostImageURL } from '@/utils';
import { getDDay } from '@/utils/getDDay';
import { useState } from 'react';
import { useEffect } from 'react';

export default function PlanPreview() {
  const { data } = useScheduleList();
  const [trip, setTrip] = useState();

  useEffect(() => {
    if (data) {
      setTrip(data.items.filter((item) => item));
    }
  }, []);

  if (data) {
    return (
      <div className="sm:w-[361px] md:w-[768px] lg:w-[858px] xl:w-[1236px] mx-auto flex flex-col gap-4">
        {data?.items.map((item) => (
          <div
            key={item.id}
            className="relative mx-auto flex cursor-pointer justify-center  rounded-xl bg-gradient-to-t from-slate-800/60 via-slate-200/20"
          >
            <img
              src={getPocketHostImageURL(item, 'place').split(',')[0]}
              alt={`${item.title} 이미지`}
              className="h-[360px] min-h-[360px]  w-[1236px] min-w-[360px]  rounded-xl object-cover mix-blend-multiply"
            />
            <div className="absolute bottom-4 left-3 flex flex-col ">
              <span className="text-xl font-semibold text-white">
                {item.title}
              </span>
              <span className="text-sm font-light text-background">
                {`${item.start_date.toString().substr(0, 10)} - ${item.end_date
                  .toString()
                  .substr(0, 10)}`}
              </span>
            </div>
            <span className="absolute bottom-6 right-3 text-xl font-bold text-white">
              {getDDay(item.start_date)}
            </span>
          </div>
        ))}
      </div>
    );
  }
}
