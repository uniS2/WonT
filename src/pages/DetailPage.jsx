import BookMark from '@/components/BookMark';
import DetailInfo from '@/components/Detail/DetailInfo';
import MyPageHeader from '@/components/PageHeader';
import useRecommendsList from '@/hooks/useRecommendsList';
import { getPocketHostImageURL } from '@/utils';

// 상세페이지
function DetailPage() {
  const { data } = useRecommendsList();

  const currentPath = window.location.pathname.replace('/bookmark/', '');
  const detailPlace = data?.items?.find((item) => item.id === currentPath);

  if (data) {
    return (
      <div className="container mx-auto  min-h-screen min-w-[22.5rem] bg-background pb-10">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <h1 className="sr-only">DetailPage</h1>
          <MyPageHeader page="detail" />
          <img
            src={getPocketHostImageURL(detailPlace, 'image')}
            alt={`${detailPlace.place} 이미지`}
            className="mx-3 h-[22.5rem]  min-h-[22.5rem] w-[77.25rem]  min-w-[20rem] rounded-xl object-cover "
          />
        </div>
        <div className="mx-auto  my-5 max-w-[1236px] px-4">
          <span className=" h-4 rounded-full bg-secondary px-2 py-1 text-[0.875rem]">
            {detailPlace.localMain}
          </span>
          <div className="mb-1  mt-3 flex items-center gap-2">
            <h2 className=" text-2xl font-bold text-contentsPrimary">
              {detailPlace.place}
            </h2>
            <button
              type="button"
              onClick={() => handleBookmark(detailPlace.id)}
            >
              <BookMark />
            </button>
          </div>
          <p className="mb-3 text-[0.875rem] font-light text-gray-1">
            {detailPlace.address}
          </p>
          <div className="border-b-[0.0625rem] border-contentsPrimary"></div>
        </div>
        <DetailInfo detailPlace={detailPlace} />
      </div>
    );
  }
}

export default DetailPage;
