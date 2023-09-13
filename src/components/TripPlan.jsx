import { Link } from 'react-router-dom';
import { useLocalStore } from '@/store/localStore';
import TripPlanEditButton from '@/components/TripPlanEditButton';

export default function TripPlan({ background = 'bg-secondary/50' }) {
  const selectName = useLocalStore((set) => set.selectName);
  return (
    <div className={`${background} px-6 py-[1.125rem]`}>
      <div className="mx-auto flex justify-between gap-[0.125rem]">
        <span className="text-base text-contentsPrimary">{selectName}</span>
        <Link to="/triplocal">
          <TripPlanEditButton />
        </Link>
      </div>
      <div className="mx-auto flex justify-between">
        <span className="text-base font-light text-contentsSecondary">
          2023.10.10 - 2023.10.20
        </span>
        <Link to="/tripcalendar">
          <TripPlanEditButton />
        </Link>
      </div>
    </div>
  );
}
