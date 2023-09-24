import toggleDown from '@/assets/common-toogle-down.webp';
import toggleUp from '@/assets/common-toogle-up.webp';
import { getTripDate, getTripDateUTC } from '@/utils';
import { useState } from 'react';

export default function PlanDate({
  toggleButton,
  toggleSchedule,
  item,
  index,
  setToggleSchedule,
}) {
  const handleToggleButton = (index) => {
    toggleButton(index);
    setToggleSchedule(!toggleSchedule);
  };

  return (
    <>
      <div className="mx-5 my-4 flex items-center gap-[10px] py-3 ">
        <span key={index} className="font-bold">
          Day {index + 1}
        </span>
        <span className="aria-hidden:">|</span>
        <span className="text-[14px] text-contentsSecondary">
          {getTripDate(getTripDateUTC(item))}
        </span>
        <button type="button" onClick={handleToggleButton}>
          <img src={toggleSchedule ? toggleDown : toggleUp} alt="일정 펼치기" />
        </button>
      </div>
      <hr />
    </>
  );
}
