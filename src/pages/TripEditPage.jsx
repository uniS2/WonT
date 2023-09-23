import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header/Header';
import TripPlan from '@/components/TripPlan';
import Map from '@/components/Map';
import AddPlan from '@/components/TripEdit/AddPlan';
import ButtonMedium from '@/components/TripEdit/ButtonMedium';
import PlanDate from '@/components/TripEdit/PlanDate';
import useScheduleList from '@/hooks/useScheduleList';
// import ScheduleMap from '@/components/TripEdit/ScheduleMap';
import { Helmet } from 'react-helmet-async';
import { useDateStore } from '@/store/dateStore';
import { useParams } from 'react-router-dom';
import { getRangeDay } from '@/utils/getRangeDay';

/* -------------------------------------------------------------------------- */

export default function TripEditPage() {
  const currentPath = useParams();
  const [toggleSchedule, setToggleSchedule] = useState(false);
  const handleToggle = () => {
    setToggleSchedule(!toggleSchedule);
  };
  const { data } = useScheduleList();
  const selectDate = useDateStore((set) => set.tripDate);
  const selectRangeDate = getRangeDay(selectDate[0], selectDate[1]);

  return (
    <div className="bg-background">
      <Helmet>
        <title className="sr-only">TripEdit - Wont</title>
      </Helmet>
      <Header />
      <div className="w-auto ">
        <TripPlan />
      </div>
      <div className="container mx-auto min-w-[22.5rem] bg-background pb-14">
        <div className={`mx-auto mt-[10px] max-w-7xl`}>
          <Map height={'h-[31.25rem]'} />
          {/* <ScheduleMap height={'h-[31.25rem]'} /> */}
          {selectRangeDate?.map((item, index) => (
            <>
              <PlanDate
                toggleButton={handleToggle}
                toggleSchedule={toggleSchedule}
                item={item}
                index={index}
              />

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
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
