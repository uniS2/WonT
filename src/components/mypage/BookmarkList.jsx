import { getPocketHostImageURL } from '@/utils';
import BookMark from '../BookMark';
import useRecommendsList from '@/hooks/useRecommendsList';
import { useState } from 'react';
import { useEffect } from 'react';

export default function BookmarkList() {
  const [bookmarkList, setBookmarkList] = useState([]);
  const { data, isLoading } = useRecommendsList();

  useEffect(() => {
    const saveBookmark = JSON.parse(localStorage.getItem('bookmark'));
    if (saveBookmark) {
      setBookmarkList(saveBookmark);
    }
    console.log(saveBookmark);
  }, []);

  const toggleBookmark = (id) => {
    const isBookmark = bookmarkList.includes(id);
    console.log(isBookmark);

    if (isBookmark) {
      const updatedList = bookmarkList.filter((itemId) => itemId !== id);
      setBookmarkList(updatedList);
    } else {
      setBookmarkList([...bookmarkList, id]);
      console.log(setBookmarkList);
    }
  };

  useEffect(() => {
    localStorage.setItem('bookmark', JSON.stringify(bookmarkList));
  }, [bookmarkList]);

  return (
    <ul className="md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mx-auto grid gap-4">
      {data?.items.map((item) => (
        <li key={item.id} className="relative min-w-[360px]">
          <div
            className="absolute right-4 top-4 cursor-pointer"
            onClick={() => toggleBookmark(item.id)}
          >
            {bookmarkList.includes(item.id) ? (
              <BookMark color="#C9ECFF" />
            ) : (
              <BookMark color="none" />
            )}
          </div>
          <img
            src={getPocketHostImageURL(item).split(',')[0]}
            alt=""
            className="md:h-[380px] lg:h-[420px] sm:h-[360px] xl:h-[400px] box-content aspect-square rounded-lg border-[1px] border-gray-2 object-cover"
          />
        </li>
      ))}
    </ul>
  );
}
