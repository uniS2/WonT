import MainHeader from '@/components/main/MainHeader';
import MainMakePlan from '@/components/main/MainMakePlan';

// 메인 페이지
function MainPage() {
  return (
    <>
      <h1 className="sr-only">MainPage</h1>
      <div className="mx-auto min-h-[50rem] max-w-[80rem] ">
        <MainHeader />
        <MainMakePlan />
      </div>
    </>
  );
}

export default MainPage;
