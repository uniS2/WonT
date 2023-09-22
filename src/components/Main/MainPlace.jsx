import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pocketbase from '@/api/pocketbase';
import BookMark from '@/components/BookMark';
import { getPocketHostImageURL } from '@/utils/index.js';
import { useRef } from 'react';

export default function MainPlace() {
  const [data, setData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState([]);
  const user = pocketbase.authStore.model;
  const userId = user.id;
  const buttonClickedRef = useRef([]);

  console.log(buttonClickedRef.current);

  console.log(buttonClicked);
  useEffect(() => {
    async function fetchUsers() {
      const usersList = await pocketbase
        .collection('recommends')
        .getFullList({});
      setData(usersList);
    }

    fetchUsers();
  }, []);

  const handleClick = async (itemId) => {
    if (!buttonClicked.includes(itemId)) {
      await pocketbase.collection('recommends').update(itemId, {
        'userEmail+': userId,
      });
      buttonClickedRef.current = [...buttonClickedRef.current, itemId];
      setButtonClicked([...buttonClicked, itemId]);
    } else {
      const updataedButtons = buttonClicked.filter((id) => id !== itemId);
      setButtonClicked(updataedButtons);
    }
  };
  // 조건걸어서 사라지게도 만들자.
  console.log(buttonClicked);
  return (
    <div className="flex flex-col items-center">
      <ul className="grid grid-cols-2 gap-5 px-[1.688rem] md:grid md:grid-cols-4 md:gap-5 lg:grid lg:grid-cols-4 lg:gap-5 2xl:grid 2xl:grid-cols-8 2xl:gap-5 ">
        {data?.map((item) => (
          <li
            key={item.id}
            className="relative mb-[1.625rem] flex h-[9.25rem] w-[9.25rem] transform overflow-hidden rounded-md transition hover:scale-110 hover:rounded-lg lg:h-[15rem] lg:w-[15rem] xl:h-[18.125rem] xl:w-[18.125rem] 2xl:h-[9.25rem] 2xl:w-[9.25rem] "
          >
            <Link to={`/bookmark/${item.id}`}>
              <img
                src={getPocketHostImageURL(item).split(',')[0]}
                className="h-[9.25rem] w-[9.25rem] md:h-[9.25rem] md:w-[9.25rem] lg:h-[15rem] lg:w-[15rem] xl:h-[18.125rem] xl:w-[18.125rem]  2xl:h-[9.25rem] 2xl:w-[9.25rem] "
              />
              <div className="absolute bottom-1 left-1 font-bold text-white">
                <p>{item.place}</p>
                <p>{item.localMain}</p>
              </div>
            </Link>
            <button
              type="button"
              className={`absolute right-3 top-3`}
              onClick={() => handleClick(item.id)}
            >
              <BookMark
                color={buttonClicked.includes(String(item.id)) ? '#C9ECFF' : ''}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
