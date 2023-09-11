// 여행 일정 편집 페이지
import Header from '@/components/Header/Header';
import TripPlan from '@/components/tripeditpage/TripPlan';
import Map from './../components/Map';
import AddPlan from '@/components/tripeditpage/AddPlan';
import ButtonMedium from '@/components/tripeditpage/ButtonMedium';
import { Link } from 'react-router-dom';

export default function TripEditPage() {
  return (
    <div className="mx-auto  min-w-[22.5rem] bg-background ">
      <h1 className="sr-only">TripEditPage</h1>
      <Header />
      <TripPlan />
      <div className="mx-auto mt-[10px] max-w-[1280px] ">
        <Map width={'w-[80rem]'} height={'h-[31.25rem]'} />
        <AddPlan view={true} text="장소" />
        <Link to="/tripplace">
          <ButtonMedium fill={false} text="일정 추가" />
        </Link>
        <AddPlan view={false} text="숙소" />
        <Link to="/triphotel">
          <ButtonMedium fill={false} text="숙소 추가" />
        </Link>
        <div className="py-10">
          <ButtonMedium fill={true} text="저장" />
        </div>
      </div>
    </div>
  );
}
