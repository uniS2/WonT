import pocketbase from '@/api/pocketbase';
import { getPocketHostImageURL } from '@/utils';
import BookMark from '../BookMark';
import { useRef } from 'react';
import useRecommendsList from '@/hooks/useRecommendsList';
import useMemosStore from '@/store/memoStore';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

// 데이터 요청 함수 (query function)
const getRecommends = async (userId) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

// 데이터의 userEmail 필드에서 삭제 요청 함수 (mutation function)
const removeRecommend = async ({ recommendId, userId }) => {
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail-': userId,
  });
};

// 로그인 사용자 (더미 데이터)
// 실제 로그인 후 `pocketbase.authStore.model`에서 정보를 가져올 수 있습니다.
const dummyLoginUserInfo = {
  id: 'ypejq0ceyg9dpza',
  username: 'hyeonjuu',
  email: 'janghyeonjuu@gmail.com',
};

export default function BookmarkList() {
  const { data, isLoading, error } = useRecommendsList();

  if (isLoading) {
    return <div className=" flex justify-center ">로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.toString()}</div>;
  }

  if (data?.length === 0) {
    return <div className=" flex justify-center ">북마크가 비어있습니다.</div>;
  }

  return (
    <ul className="mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data?.items?.map?.((item) => (
        <li
          key={item.id}
          className="relative flex min-w-[360px] justify-center "
        >
          <button
            type="button"
            className="absolute right-4 top-4 cursor-pointer sm:right-4 sm:top-4 md:right-4 md:top-4 lg:right-12 lg:top-4 xl:right-4 xl:top-4"
          >
            <BookMark color="#C9ECFF" />
          </button>
          <Link to={`/bookmark/${item.id}`}>
            <img
              src={getPocketHostImageURL(item).split(',')[0]}
              alt=""
              className="box-content aspect-square  rounded-lg border-[1px] border-gray-2 object-cover md:h-[380px] lg:h-[420px] xl:h-[400px]"
              // onClick={(e) => handleMoveDetail(e, item.id)}
              // id={memo}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
