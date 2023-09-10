import MyPageHeader from '@/components/mypage/MyPageHeader';
import Profile from '@/components/mypage/Profile';

export default function MySchedule() {
  return (
    <div className="min-w-[22.5rem] bg-background ">
      <h1 className="sr-only">MySchedule</h1>
      <MyPageHeader />
      <div className="xl:container container mx-auto mt-7 flex flex-col items-center">
        <span className="mb-[1.375rem] text-[1.5rem] font-extrabold leading-normal text-contentsPrimary">
          마이 페이지
        </span>
        <Profile />
        <span className="mt-[0.625rem] text-[18px] text-contentsSecondary">
          멋쟁이 사자 10조
        </span>
      </div>
    </div>
  );
}
