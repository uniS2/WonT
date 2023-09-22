import { useParams } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getPocketHostImageURL } from '@/utils';
import pocketbase from '@/api/pocketbase';
import BookMark from '@/components/BookMark';
import MyPageHeader from '@/components/PageHeader';
import DetailInfo from '@/components/Detail/DetailInfo';

/* -------------------------------------------------------------------------- */
// 데이터 요청 함수 (query function)

const getRecommend = async (recommendId) => {
  return await pocketbase.collection('recommends').getOne(recommendId, {
    // fields: 'collectionId,id,image,userEmail',
  });
};

// 데이터의 userEmail 필드에서 삭제 요청 함수 (mutation function)
const addBookmark = async ({ recommendId, userId }) => {
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail+': userId,
  });
};
const removeBookmark = async ({ recommendId, userId }) => {
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail-': userId,
  });
};

/* -------------------------------------------------------------------------- */
// *상세페이지

export default function DetailPage() {
  // 루트에서 추천 장소 ID 읽기
  const { recommendId } = useParams();

  // 로그인 사용자 정보 가져오기
  const user = pocketbase.authStore.model;

  // 쿼리 클라이언트 인스턴스 가져오기
  const queryClient = useQueryClient();

  // 쿼리 키
  const queryKey = ['recommends', recommendId];
  console.log(queryKey);

  // 데이터 쿼리
  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: () => getRecommend(recommendId),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  // 데이터 뮤테이션 (추가)
  const addMutation = useMutation({
    mutationFn: addBookmark,
    onMutate: async ({ recommendId, userId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (recommendData) => ({
        ...recommendData,
        userEmail: [...recommendData.userEmail, userId],
      }));

      return { previousData };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (context) => {
      queryClient.setQueryData(queryKey, context.previousData);
    },
  });

  // 데이터 뮤테이션 (삭제)
  const removeMutation = useMutation({
    mutationFn: removeBookmark,
    onMutate: async ({ recommendId, userId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousData = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (recommendData) => ({
        ...recommendData,
        userEmail: recommendData.userEmail.filter((email) => email !== userId),
      }));

      return { previousData };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (context) => {
      queryClient.setQueryData(queryKey, context.previousData);
    },
  });

  // 로딩 상태 표시
  // if (isLoading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       로딩 중...
  //     </div>
  //   );
  // }

  // 오류 상태 표시
  // if (isLoading) {
  //   return <div>{error.toString()}</div>;
  // }

  if (data) {
    // 추천 장소 (질문 코드에서 detailPlace를 사용하므로 할당한 것)
    const detailPlace = data;

    // 로그인 사용자 북마크 여부
    const isBookmark = detailPlace.userEmail.includes(user.id);
    // console.log(detailPlace);
    // console.log(isBookmark);

    // 북마크 토글 함수
    const handleToggleBookmark = (recommendId, userId) => async () => {
      const mutationMethod = isBookmark ? removeMutation : addMutation;
      mutationMethod.mutate({ recommendId, userId });
    };

    return (
      <div className="   mx-auto min-h-screen min-w-[22.5rem] bg-background pb-10">
        <div className=" flex flex-col items-center justify-center gap-10 ">
          <MyPageHeader page="detail" />
          <h1 className="sr-only">추천 장소</h1>
        </div>
        <div className="container">
          <section className="animate-fade-animate px-6">
            <img
              src={getPocketHostImageURL(detailPlace, 'image')}
              alt={`${detailPlace.place} 이미지`}
              className="  mx-auto my-10 h-[22.5rem] min-h-[22.5rem] w-[77.25rem] min-w-[20rem] rounded-xl object-cover "
            />
            <div className="mx-auto  my-5 max-w-[1236px] px-4">
              <span className=" h-4 rounded-full bg-secondary px-2 py-1 text-[0.875rem]">
                {detailPlace.localMain}
              </span>
              <div className="mb-1  mt-3 flex items-center">
                <h2 className=" text-2xl font-bold text-contentsPrimary">
                  {detailPlace.place}
                </h2>
                <button
                  type="button"
                  onClick={handleToggleBookmark(detailPlace.id, user.id)}
                  className="m-2"
                >
                  <BookMark color={isBookmark ? '#C9ECFF' : ''} />
                </button>
              </div>
              <p className="mb-3 text-[0.875rem] font-light text-gray-1">
                {detailPlace.address}
              </p>
              <div className="border-b-[0.0625rem] border-contentsPrimary"></div>
            </div>
            <DetailInfo detailPlace={detailPlace} />
          </section>
        </div>
      </div>
    );
  }
}
