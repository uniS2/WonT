import React from 'react';
import Test from '@/assets/LandingPage-carousel-three.svg';
function MainTravels({ title = '', text = '' }) {
  return (
    <div className=" h-[12.5rem] w-[20rem]">
      <img src={Test} alt="test" /> {/* img */}
      <div className="pb-[1.25rem] pl-[1.688rem] pt-[0.625rem]">
        <p className="text-base font-semibold">
          단지가 좋아하는 집에서 인생 사진 {/* title */}
        </p>
        <p className="text-sm font-light text-gray-500">
          CUTE님의 일정 , 1박 2일 {/* text */}
        </p>
      </div>
    </div>
  );
}

export default MainTravels;
