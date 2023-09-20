import MainHeader from '@/components/Main/MainHeader';
import MainMakePlan from '@/components/Main/MainMakePlan';
import MainTitle from '@/components/Main/MainTitle';
import MainPlace from '@/components/Main/MainPlace';
import MainTravels from '@/components/Main/MainTravels';

// 메인 페이지
export default function MainPage() {
  return (
    <div className="container mx-auto">
      <h1 className="sr-only">MainPage</h1>
      <MainHeader />
      <div className="container mx-auto flex flex-col items-center bg-gray-100/30">
        <MainMakePlan />
        <div>
          <MainTitle text="국내 추천 여행지" />
          <MainPlace />
        </div>
        <div>
          <MainTitle text="Best 여행기" />
          <MainTravels />
        </div>
      </div>
    </div>
  );
}
