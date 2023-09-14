import { getPocketHostImageURL } from '@/utils';
import BookMark from '../BookMark';
import useRecommendsList from '@/hooks/useRecommendsList';
import { useRef } from 'react';

export default function BookmarkList() {
  const bookmarkListRef = useRef([]);
  const { data } = useRecommendsList();

  const handleBookmark = (id) => {
    const isBookmark = bookmarkListRef.current.includes(id);

    if (isBookmark) {
      bookmarkListRef.current = bookmarkListRef.current.filter(
        (itemId) => itemId !== id
      );
      console.log(bookmarkListRef);
    } else {
      bookmarkListRef.current = [...bookmarkListRef.current, id];
      console.log(bookmarkListRef);
    }
  };

  return (
    <ul className="md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto grid gap-4">
      {data?.items.map((item) => (
        <li key={item.id} className="relative min-w-[360px]">
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => handleBookmark(item.id)}
          >
            {item.filter(bookmarkListRef) ? (
              <BookMark color="#C9ECFF" />
            ) : (
              <BookMark color="none" />
            )}
          </div>
          <img
            src={getPocketHostImageURL(item).split(',')[0]}
            alt=""
            className="md:h-[380px] lg:h-[420px]  xl:h-[400px] box-content aspect-square rounded-lg border-[1px] border-gray-2 object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
