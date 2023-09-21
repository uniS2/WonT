import useRecommendsList from '@/hooks/useRecommendsList';
import useScheduleList from '@/hooks/useScheduleList';
import { useQuery } from '@tanstack/react-query';
import pocketbase from '@/api/pocketbase';

const getRecommends = async (userId) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

export default function MyPageTabInfo({ tab, menu }) {
  const user = pocketbase.authStore.model;
  const { data } =
    tab === 'myschedule' ? useScheduleList() : useRecommendsList();
  const queryKey = ['recommends', user.id];
  const {
    isLoading,
    error,
    data: bookmarkList,
  } = useQuery({
    queryKey: queryKey,
    queryFn: () => getRecommends(user.id),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  const scheduleList = data?.items?.filter(
    (item) => item.username === user.id
  )?.length;
  if (data) {
    return (
      <div className="mx-8 mb-3 mt-6 flex items-center justify-start gap-[10px]">
        <span className=" flex font-medium text-contentsPrimary">{menu}</span>

        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            className="relative"
          >
            <circle cx="9.5" cy="9.5" r="9.5" fill="#50D4E5" />
          </svg>
          <span className="absolute text-[0.875rem] font-medium text-white">
            {tab === 'myschedule' ? scheduleList : bookmarkList?.length}
          </span>
        </div>
      </div>
    );
  }
}
