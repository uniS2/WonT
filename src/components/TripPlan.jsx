import { Link } from 'react-router-dom';
import TripPlanEditButton from '@/components/TripPlanEditButton';
import { useLocalStore } from '@/store/localStore';
import { useQuery } from '@tanstack/react-query';
import { getPocketHostURL } from '@/utils';

const getMySchedule = () =>
  fetch(`${getPocketHostURL('mySchedule')}`).then((res) => res.json());

export default function TripPlan({ background = 'bg-secondary/50' }) {
  const selectName = useLocalStore((set) => set.selectName);
  const { data } = useQuery(['mySchedule'], getMySchedule);
  console.log(data);

  return (
    <div className={`${background} px-6 py-[1.125rem] md:px-10 lg:px-8`}>
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
