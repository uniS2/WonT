import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header/Header';
import TripPlan from '@/components/TripPlan';
import Map from '@/components/Map';
import AddPlan from '@/components/TripEdit/AddPlan';
import ButtonMedium from '@/components/TripEdit/ButtonMedium';
import PlanDate from '@/components/TripEdit/PlanDate';
import useScheduleList from '@/hooks/useScheduleList';

export default function TripEditPage() {
  const [toggleSchedule, setToggleSchedule] = useState(false);
  const handleToggle = () => {
    setToggleSchedule(!toggleSchedule);
  };
  const { data } = useScheduleList();
  console.log(data);

  const currentPath = window.location.pathname.replace('/tripedit/', '');
  console.log(currentPath);
  const tripSchdeule = data?.items?.find((item) => item.id === currentPath);

  return (
    <div className="container mx-auto min-w-[22.5rem] bg-background pb-14">
      <h1 className="sr-only">TripEditPage</h1>
      <Header />
      <TripPlan />
      <div className={`mx-auto mt-[10px] max-w-7xl`}>
        <Map height={'h-[31.25rem]'} />
        <PlanDate toggleButton={handleToggle} toggleSchedule={toggleSchedule} />
        <div className={`${toggleSchedule ? 'hidden' : ''}`}>
          <AddPlan text="장소" />
          <Link to="/tripplace">
            <ButtonMedium fill={false} text="일정 추가" />
          </Link>
          <AddPlan text="숙소" />
          <Link to="/triphotel">
            <ButtonMedium fill={false} text="숙소 추가" />
          </Link>
        </div>
        <div className={toggleSchedule ? 'pt-0' : 'py-10'}>
          <ButtonMedium fill={true} text="저장" />
        </div>
      </div>
    </div>
  );
}
