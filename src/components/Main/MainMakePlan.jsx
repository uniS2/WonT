import React from 'react';
import { Link } from 'react-router-dom';

// import PaperAirPlane from '@/assets/MainPage-planeIcon.webp';
import { useState } from 'react';

export default function MainMakePlan() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`mx-5 mb-[40px] mt-[1.063rem] flex h-[140px] w-[20rem] items-center justify-center rounded-[0.625rem] bg-white shadow-md shadow-secondary/50 md:w-[568px] lg:w-[824px] ${
        hover ? 'hovered-style' : ''
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link to="/triplocal">
        <button type="button" className="flex flex-col items-center ">
          <div
            type="button"
            className="border-secondary/0.8 relative flex overflow-hidden rounded-full border-[1px]"
          >
            <img
              src="/src/assets/common-favicon.svg"
              alt=""
              className={`absolute left-[12px] top-[14px] delay-75 ${
                hover ? 'animate-plain-animate ' : ''
              }`}
            />
            <div class="bottom-3 right-5 flex h-14 w-14 items-center rounded-full bg-[#ECFFFE] p-1"></div>
            {/* <img src={PaperAirPlane} alt="" /> */}
          </div>

          <div className="relative flex flex-col items-center pt-[0.625rem]">
            <p>새로운 일정을 추가해보세요!</p>
            <p className="font-bold">여행 일정 만들기</p>
            <div
              className="absolute bottom-1
 h-2 w-[7rem] bg-custom-color/40"
            ></div>
          </div>
        </button>
      </Link>
    </div>
  );
}
