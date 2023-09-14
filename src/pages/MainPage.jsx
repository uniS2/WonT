import MainHeader from '@/components/main/MainHeader';
import MainMakePlan from '@/components/main/MainMakePlan';
import MainTitle from '@/components/main/MainTitle';
import MainPlace from './../components/main/MainPlace';
import MainMoreButton from '@/components/main/MainMoreButton';
import MainTravels from '@/components/main/MainTravels';

// 메인 페이지
function MainPage() {
  return (
    <div className="container mx-auto">
      <h1 className="sr-only">MainPage</h1>
      <MainHeader />
      <div className="container mx-auto flex  flex-col items-center bg-gray-100/30 ">
        <MainMakePlan />
        <MainTitle text="국내 추천 여행지" />
        <MainPlace />
        <MainTitle text="Best 여행기" />
        <div className="mb-[8.25rem]">
          <MainTravels />
        </div>
        <div className="mb-[8.25rem]">
          <MainTravels />
        </div>
        <div className="mb-[8.25rem]">
          <MainTravels />
        </div>
        <MainMoreButton />
      </div>
    </div>
  );
}

export default MainPage;
