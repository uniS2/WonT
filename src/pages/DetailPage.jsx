import BookMark from '@/components/BookMark';
import DetailInfo from '@/components/Detail/DetailInfo';
import MyPageHeader from '@/components/PageHeader';

// 상세페이지
function DetailPage() {
  return (
    <div className="container  mx-auto min-w-[22.5rem] bg-background">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="sr-only">DetailPage</h1>
        <MyPageHeader page="detail" />
        <img
          src="/src/assets/common-trip-default.jpg"
          alt="여행지 이미지"
          className="h-[22.5rem] min-h-[22.5rem]  w-[77.25rem] min-w-[20rem]  rounded-xl object-cover "
        />
      </div>
      <div className="mx-auto  my-5 max-w-[1236px] px-4">
        <span className=" h-4 rounded-full bg-secondary px-4 py-1">용인</span>
        <div className="mb-1  mt-3 flex items-center gap-2">
          <h2 className=" text-2xl font-bold text-contentsPrimary">에버랜드</h2>
          <BookMark />
        </div>
        <p className="mb-3 text-[0.875rem] font-light text-gray-1">
          경기도 용인시 처인구 포곡읍 에버랜드로 199(포곡읍){' '}
        </p>
        <div className="border-b-[0.0625rem] border-contentsPrimary"></div>
      </div>
      <DetailInfo infoTitle="none" />

      {/* <img src="/src/assets/detail-calendar.svg" alt="" className="h-6 w-6" />
      <img src="/src/assets/detail-ticket.svg" alt="" className="h-6 w-6" />
      <img src="/src/assets/detail-clock.svg" alt="" className="h-6 w-6" />
      <img src="/src/assets/detail-homepage.svg" alt="" className="h-6 w-6" /> */}
    </div>
  );
}

export default DetailPage;
