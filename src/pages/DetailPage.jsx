import BookMark from '@/components/BookMark';
import DetailInfo from '@/components/Detail/DetailInfo';
import MyPageHeader from '@/components/PageHeader';
import useRecommendsList from '@/hooks/useRecommendsList';
import { getPocketHostImageURL } from '@/utils';
import pocketbase from '@/api/pocketbase';
import { useQuery } from '@tanstack/react-query';

// 데이터 요청 함수 (query function)
const getRecommends = async (userId) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

const removeRecommend = async ({ recommendId, userId }) => {
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail-': userId,
  });
};

// 상세페이지
export default function DetailPage() {
  const { data: recommendList } = useRecommendsList();
  const currentPath = window.location.pathname.replace('/bookmark/', '');
  const detailPlace = recommendList?.items?.find(
    (item) => item.id === currentPath
  );

  const loginUser = pocketbase.authStore.model;
  console.log(loginUser);

  const { isFetching, isLoading, error, data, refetch } = useQuery({
    queryKey: ['recommends', loginUser.id],
    queryFn: () => getRecommends(loginUser.id),
    refetchOnWindowFocus: false,
  });
  console.log(recommendList);

  const handleAddBookmark = (recommendId) => async () => {
    // recommends 컬렉션의 recommendId 레코드에서 userEmail 필드(배열)에 user.id를 추가
    // 참고: https://pocketbase.io/docs/working-with-relations
    await pocketbase.collection('recommends').update(recommendId, {
      'userEmail+': loginUser.id,
    });

    // 데이터 리패칭(서버에서 다시 가져오기 요청)
    refetch();
  };

  if (recommendList) {
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
              className="bg-orange-600"
              onClick={() => {
                if (data) {
                  handleAddBookmark(item.id);
                } else {
                  handleRemoveBookmark(item.id);
                }
              }}
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
