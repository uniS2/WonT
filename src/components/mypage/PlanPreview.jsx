import useScheduleList from '@/hooks/useScheduleList';
import { getPocketHostImageURL, getPocketHostURL } from '@/utils';

export default function PlanPreview() {
  const { data } = useScheduleList();
  // const image = getPocketHostImageURL();
  // console.log(data.items);
  // console.log(data.items[0].place[0]);

  return (
    <div className="mx-auto flex flex-col gap-4 px-6">
      {data?.items.map((item) => (
        <div
          key={item.id}
          className="relative mx-auto flex justify-center rounded-xl  bg-gradient-to-t from-slate-800/60 via-slate-200/20 "
        >
          <img
            src={getPocketHostImageURL(item, 'image')}
            alt=""
            className="h-[360px] min-h-[320px]  w-[1240px] min-w-[320px] justify-center rounded-xl object-cover mix-blend-multiply"
          />
          <div className="absolute bottom-2 left-3 flex flex-col ">
            <span className="text-xl font-semibold text-white">
              {item.title}
            </span>
            <span className="text-sm font-light text-background">
              {`${item.start_date} - ${item.end_date}`}
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
