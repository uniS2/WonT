import React from 'react';
import PlaneIcon from '@/assets/LandingPage-plane.svg';

function LandingPagePartOne() {
  return (
    <div>
      <div className="flex h-[6.25rem] w-[20rem] justify-around bg-gray-100/30">
        <div className="relative flex flex-col justify-center py-[1.6875rem]  pl-[1.723125rem] font-semibold text-contentsPrimary">
          <p>WonT에서</p>
          <p>여행을 준비 해보세요!</p>
          <div
            className="absolute
bottom-7  h-2 w-[8.775rem] bg-custom-color/40"
          ></div>
        </div>
        <img src={PlaneIcon} alt="plane" />
      </div>
    </div>
  );
}

export default LandingPagePartOne;
