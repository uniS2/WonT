import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import pocketbase from '@/api/pocketbase';
import BookMark from '@/components/BookMark';
import { getPocketHostImageURL } from '@/utils/index.js';

export default function MainPlace() {
  const [data, setData] = useState([]);
  const [buttonClicked, setButtonClicked] = useState({});

  useEffect(() => {
    async function fetchUsers() {
      const usersList = await pocketbase
        .collection('recommends')
        .getFullList({});
      setData(usersList);
    }

    fetchUsers();
  }, []);

  const handleClick = (itemId) => {
    setButtonClicked((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div className="flex flex-col items-center">
      <ul className="grid grid-cols-2 gap-5 px-[1.688rem] md:grid md:grid-cols-4 md:gap-5 lg:grid lg:grid-cols-8 lg:gap-5 ">
        {data?.map((item) => (
          <li
            key={item.id}
            className="relative mb-[1.625rem] flex h-[9.25rem] w-[9.25rem] transform overflow-hidden rounded-md transition hover:scale-110 hover:rounded-lg "
          >
            <Link to={`/bookmark/${item.id}`}>
              <img
                src={getPocketHostImageURL(item).split(',')[0]}
                className="h-[9.25rem] w-[9.25rem]"
              />
              <div className="absolute bottom-1 left-1 font-bold text-white">
                <p>{item.place}</p>
                <p>{item.localMain}</p>
              </div>
            </Link>
            <button
              className={`absolute right-3 top-3`}
              onClick={() => handleClick(item.id)}
              style={{
                backgroundColor: buttonClicked[item.id]
                  ? '#4EC3F9'
                  : 'transparent',
              }}
            >
              <BookMark
                color={buttonClicked[item.id] ? '#4EC3F9' : '#FFFFFF'}
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
