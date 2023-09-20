import pocketbase from '@/api/pocketbase';
import BookMark from '@/components/BookMark';
import DetailInfo from '@/components/Detail/DetailInfo';
import MyPageHeader from '@/components/PageHeader';
import useRecommendsList from '@/hooks/useRecommendsList';
import { getPocketHostImageURL } from '@/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

/* -------------------------------------------------------------------------- */
// 데이터 요청 함수 (query function)
const getRecommends = async (userId) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
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
  const { data: recommendList } = useRecommendsList();
  const currentPath = window.location.pathname.replace('/bookmark/', '');
  const detailPlace = recommendList?.items?.find(
    (item) => item.id === currentPath
  );

  const [bookmarkList, setBookmarkList] = useState();
  const user = pocketbase.authStore.model;

  const queryClient = useQueryClient();
  const queryKey = ['recommends', user.id];

  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: () => getRecommends(user.id),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  const addMutation = useMutation({
    mutationFn: addBookmark,
    onMutate: async ({ recommendId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousList = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (list) => {
        return list.filter((item) => item.id !== recommendId);
      });

      return { previousList };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
      setBookmarkList(!bookmarkList);
    },
    onError: (context) => {
      queryClient.setQueryData(queryKey, context.previousList);
    },
  });
  const removeMutation = useMutation({
    mutationFn: removeBookmark,
    onMutate: async ({ recommendId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousList = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (list) => {
        return list.filter((item) => item.id !== recommendId);
      });

      return { previousList };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
      setBookmarkList(!bookmarkList);
    },
    onError: (context) => {
      queryClient.setQueryData(queryKey, context.previousList);
    },
  });

  const handleToggleBookmark = (recommendId, userId) => async () => {
    if (bookmarkList) {
      removeMutation.mutate({ recommendId, userId });
    } else {
      addMutation.mutate({ recommendId, userId });
    }
  };

  const listFin = data?.map((item) => item?.id === detailPlace?.id);

  if ((detailPlace, data, recommendList)) {
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
              onClick={handleToggleBookmark(detailPlace.id, user.id)}
            >
              <BookMark color={listFin?.includes(true) ? '#C9ECFF' : ''} />
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
