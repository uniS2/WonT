import { getPocketHostImageURL } from '@/utils';
import BookMark from '../BookMark';
import useRecommendsList from '@/hooks/useRecommendsList';
import { useRef } from 'react';

export default function BookmarkList() {
  const bookmarkList = useRef([]);
  const { data } = useRecommendsList();

  const handleBookmark = (id) => {
    const isBookmark = bookmarkList.current.includes(id);

    if (isBookmark) {
      bookmarkList.current = bookmarkList.current.filter(
        (itemId) => itemId !== id
      );
      console.log(bookmarkList);
    } else {
      bookmarkList.current = [...bookmarkList.current, id];
      console.log(bookmarkList);
    }
  };

  return (
    <ul className="md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto grid gap-4">
      {data?.items.map((item) => (
        <li
          key={item.id}
          className="relative min-w-[360px] hover:-translate-y-1 hover:scale-x-[1.01] hover:scale-y-[1.01] hover:transition-all  hover:duration-200 hover:ease-in"
        >
          <a href="/main">
            <div
              className="absolute right-4 top-4 cursor-pointer "
              onClick={() => handleBookmark(item.id)}
            >
              <BookMark color="#C9ECFF" />
            </div>
            <img
              src={getPocketHostImageURL(item).split(',')[0]}
              alt=""
              className="md:h-[380px] lg:h-[420px]  xl:h-[400px] box-content aspect-square rounded-lg border-[1px] border-gray-2 object-cover"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
