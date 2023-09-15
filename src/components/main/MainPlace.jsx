import React from 'react';
import BookMark from '@/assets/common-bookmark.svg';
import { useState } from 'react';
import { useEffect } from 'react';
import MainMoreButton from './MainMoreButton';
import { getPocketHostImageURL } from '@/utils';
import pocketbase from '@/api/pocketbase';
import { Link } from 'react-router-dom';

async function fetchUsers() {
  const response = await fetch(`${getPocketHostURL('recommends')}`);
  return await response.json();
}

function MainPlace(item) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const usersList = await pocketbase.collection('recommends').getFullList({
        expand: 'locals, users',
      });
      setData(usersList);
    }

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <ul className="grid grid-cols-2 gap-5 px-[1.688rem] md:grid md:grid-cols-4 md:gap-5 lg:grid lg:grid-cols-8 lg:gap-5 ">
        {data?.map((item) => (
          <Link to={`/recommends/:${item.id}`}>
            <li
              key={item.id}
              className="relative mb-[1.625rem] flex h-[9.25rem] w-[9.25rem] overflow-hidden rounded-md hover:scale-125 "
            >
              <img src={getPocketHostImageURL(item).split(',')[0]} alt="" />

              <button className="absolute right-3 top-3">
                <img src={BookMark} alt="북마크 표시" />
              </button>
              <div className="absolute bottom-1 left-1 font-bold text-white">
                <p>{item.place}</p>
                <p>{item.localMain}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      {/* <MainMoreButton /> */}
    </div>
  );
}

export default MainPlace;
