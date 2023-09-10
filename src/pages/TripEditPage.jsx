// 여행 일정 편집 페이지
import Header from '@/components/Header/Header';
import TripPlan from '@/components/tripeditpage/TripPlan';
import Map from './../components/Map';
import AddPlan from '@/components/tripeditpage/AddPlan';
import ButtonMedium from '@/components/tripeditpage/ButtonMedium';

export default function TripEditPage() {
  return (
    <div className="mx-auto min-w-[22.5rem] bg-background">
      <h1 className="sr-only">TripEditPage</h1>
      <Header />
      <TripPlan />
      <div className="mx-auto mt-[10px] max-w-[1280px]">
        <Map width="1280px" height="500px" />
        <AddPlan view={true} text="장소" />
        <ButtonMedium fill={false} text="일정 추가" />
        <AddPlan view={false} text="숙소" />
        <ButtonMedium fill={false} text="숙소 추가" />
        <div className="my-10">
          <ButtonMedium fill={true} text="저장" />
        </div>
      </div>
    </div>
  );
}
