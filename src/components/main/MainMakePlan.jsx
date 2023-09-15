import React from 'react';
import PaperAirPlane from '@/assets/MainPage-planeIcon.svg';
import { Link } from 'react-router-dom';

function MainMakePlan() {
  return (
    <div className="mx-5 mb-[40px] mt-[1.063rem] flex h-[8.125rem] w-[20rem] items-center justify-center rounded-[0.625rem] bg-white md:w-[568px] lg:w-[824px]">
      <div className="flex flex-col items-center">
        <Link to="/triplocal">
          <button type="button" className="flex">
            <img src={PaperAirPlane} alt="" />
          </button>
        </Link>

        <div className="relative flex flex-col items-center pt-[0.625rem]">
          <p>새로운 일정을 추가해보세요!</p>
          <p className="font-bold">여행 일정 만들기</p>
          <div
            className="absolute bottom-1
 h-2 w-[7rem] bg-custom-color/40"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MainMakePlan;
