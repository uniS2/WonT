import useRecommendsList from '@/hooks/useRecommendsList';
import useScheduleList from '@/hooks/useScheduleList';
import { Link } from 'react-router-dom';

export default function MyPageTab({ position, tab, menu }) {
  const { data } =
    tab === 'myschedule' ? useScheduleList() : useRecommendsList();
  if (data) {
    return (
      <div className=" mx-auto min-w-[360px] ">
        <div className="mb-3 flex justify-around">
          <Link to="/myschedule">
            <button type="button">나의 일정</button>
          </Link>
          <Link to="/bookmark">
            <button type="button">북마크</button>
          </Link>
        </div>
        <div
          className={`relative flex w-full max-w-7xl border-b-[1px] border-contentsPrimary ${
            position === 'left' ? 'justify-start' : 'justify-end'
          } `}
        >
          <div className="h-1 w-[50%] bg-point"></div>
        </div>
        <div className="mx-8 mb-3 mt-6 flex items-center justify-start gap-[10px]">
          <span className=" flex font-medium text-contentsPrimary">{menu}</span>

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
            <span className="absolute text-[0.875rem] font-medium text-white">
              {data.totalItems}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
