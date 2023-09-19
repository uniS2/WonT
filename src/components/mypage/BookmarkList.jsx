import pocketbase from '@/api/pocketbase';
import { getPocketHostImageURL } from '@/utils';
import BookMark from '@/components/BookMark';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

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

export default function BookmarkList({ loginUser }) {
  const { isFetching, isLoading, error, data, refetch } = useQuery({
    queryKey: ['recommends', loginUser.id],
    queryFn: () => getRecommends(loginUser.id),
    refetchOnWindowFocus: false,
  });

  // 북마크 삭제 요청 함수
  const handleRemoveBookmark = (recommendId) => async () => {
    // recommends 콜렉션의 recommendId 레코드에서
    // userEmail 필드(배열)에 포함된 아이템 중 user.id와 일치하는 값 삭제
    // 참고: https://pocketbase.io/docs/working-with-relations
    await pocketbase.collection('recommends').update(recommendId, {
      'userEmail-': loginUser.id,
    });

    // 데이터 리패칭(서버에서 다시 가져오기 요청)
    refetch();
  };

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
      {data?.map?.((item) => (
        <li key={item.id} className="relative min-w-[360px]">
          <button
            type="button"
            className="absolute right-4 top-4 cursor-pointer "
            onClick={handleRemoveBookmark(item.id)}
          >
            <BookMark color="#C9ECFF" />
          </button>
          <Link to={`/bookmark/${item.id}`}>
            <img
              src={getPocketHostImageURL(item).split(',')[0]}
              alt=""
              className="aspect-square rounded-lg border-[1px] border-gray-2 object-cover "
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
