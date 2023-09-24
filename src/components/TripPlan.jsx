import { Link } from 'react-router-dom';
import TripPlanEditButton from '@/components/TripPlanEditButton';
import { getTripDate } from '@/utils';

export default function TripPlan({ data, background = 'bg-secondary/50' }) {
  return (
    <div className={`${background} px-6 py-[1.125rem] md:px-10 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">장소</dt>
            <dd className="text-base text-contentsPrimary">{data.title}</dd>
          </dl>
          <Link to="/triplocal">
            <TripPlanEditButton />
          </Link>
        </div>
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">여행 기간</dt>
            <dd className="text-base font-light text-contentsSecondary">
              {getTripDate(data.start_date)} -{getTripDate(data.end_date)}
            </dd>
          </dl>
          <Link to="/tripcalendar">
            <TripPlanEditButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
