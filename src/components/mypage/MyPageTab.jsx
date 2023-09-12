import useScheduleList from '@/hooks/useScheduleList';

export default function MyPageTab() {
  const { data } = useScheduleList();
  if (data) {
    return (
      <div className="w-full">
        <div className="mb-3 flex justify-around">
          <a href="/myschedule">나의 일정</a>
          <a href="/bookmark">북마크</a>
        </div>
        <div className="relative w-full max-w-7xl border-b-[1px] border-contentsPrimary">
          <div className="h-1 w-[50%] bg-point"></div>
        </div>
        <div className="mx-8 mb-3 mt-6 flex items-center justify-start gap-[10px]">
          <span className=" flex font-medium text-contentsPrimary">
            나의 일정
          </span>

          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              className="relative"
            >
              <circle cx="9.5" cy="9.5" r="9.5" fill="#50D4E5" />
            </svg>
            <span className="absolute font-medium text-white">
              {data.totalItems}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
