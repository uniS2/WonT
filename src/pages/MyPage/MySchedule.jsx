import MyPageHeader from '@/components/MyPage/MyPageHeader';
import MyPageTab from '@/components/MyPage/MyPageTab';
import PlanPreview from '@/components/MyPage/PlanPreview';
import Profile from '@/components/MyPage/Profile';

export default function MySchedule() {
  return (
    <div className="mx-auto min-w-[360px] max-w-[1280px] bg-background">
      <div className="mx-auto flex max-w-[80rem] flex-col items-center bg-background">
        <h1 className="sr-only">MySchedule</h1>
        <MyPageHeader />
        <div className="flex flex-col items-center pb-11 pt-7">
          <span className="mb-[1.375rem] text-[1.5rem] font-extrabold leading-normal text-contentsPrimary">
            마이 페이지
          </span>
          <Profile />
          <span className="mt-[0.625rem] text-[18px] text-contentsSecondary">
            멋쟁이 사자 10조
          </span>
        </div>
        <MyPageTab />
        <PlanPreview />
      </div>
    </div>
  );
}
