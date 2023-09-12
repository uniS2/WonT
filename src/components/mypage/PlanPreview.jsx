import useScheduleList from '@/hooks/useScheduleList';
import { getPocketHostImageURL } from '@/utils';
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
      <div className="mx-auto px-4">
        {data?.items.map((item) => (
          <div
            key={item.id}
            className="relative mx-auto flex justify-center rounded-xl  bg-gradient-to-t from-slate-800/60 via-slate-200/20 "
          >
            <img
              src={getPocketHostImageURL(item, 'place').split(',').shift()}
              alt=""
              className="h-[360px] min-h-[320px]  w-[1240px] min-w-[320px] justify-center rounded-xl object-cover mix-blend-multiply"
            />
            <div className="absolute bottom-2 left-3 flex flex-col ">
              <span className="text-xl font-semibold text-white">
                {item.title}
              </span>
              <span className="text-sm font-light text-background">
                {`${item.start_date.toString().substr(0, 10)} - ${item.end_date
                  .toString()
                  .substr(0, 10)}`}
              </span>
            </div>
            <span className="absolute bottom-5 right-3 text-xl text-white">
              D-20
            </span>
          </div>
        ))}
      </div>
    );
  }
}
