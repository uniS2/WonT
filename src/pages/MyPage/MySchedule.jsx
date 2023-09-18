import MyPageHeader from '@/components/PageHeader';
import MyPageTab from '@/components/MyPage/MyPageTab';
import PlanPreview from '@/components/MyPage/PlanPreview';
import Profile from '@/components/MyPage/Profile';

export default function MySchedule() {
  return (
    <div className="container  mx-auto min-w-[22.5rem] ">
      <div className="flex  min-h-screen flex-col items-center bg-background pb-14">
        <h1 className="sr-only">MySchedule</h1>
        <MyPageHeader page="mypage" />
        <div className="flex flex-col items-center pb-11 pt-7">
          <span className="mb-[1.375rem] text-[1.5rem] font-extrabold leading-normal text-contentsPrimary">
            마이 페이지
          </span>
          <Profile />
          <span className="text-[1.125rem] text-contentsSecondary">
            멋쟁이 사자 10조
          </span>
        </div>
        <div className="mx-auto">
          <MyPageTab position="left" tab="myschedule" menu="나의 일정" />
          <div className="px-4">
            <PlanPreview />
          </div>
        </div>
      </div>
    </div>
  );
}
