import { Link } from 'react-router-dom';
import { useLocalStore } from '@/store/localStore';

import TripPlanEditButton from '@/components/TripPlanEditButton';

export default function TripPlan({ background = 'bg-secondary/50' }) {
  const selectName = useLocalStore((set) => set.selectName);

  return (
    <div className={`${background} px-6 py-[1.125rem]`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">장소</dt>
            <dd className="text-base text-contentsPrimary">{selectName}</dd>
          </dl>
          <Link to="/triplocal">
            <TripPlanEditButton />
          </Link>
        </div>
        <div className="flex gap-2">
          <dl>
            <dt className="sr-only">여행 기간</dt>
            <dd className="text-base font-light text-contentsSecondary">
              2023.10.10 - 2023.10.20
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
