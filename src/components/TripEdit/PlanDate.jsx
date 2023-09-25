import toggleDown from '@/assets/common-toogle-down.webp';
import toggleUp from '@/assets/common-toogle-up.webp';
import { useScheduleStore } from '@/store/scheduleStore';
import { getTripDate, getTripDateUTC } from '@/utils';
import { useId } from 'react';
import { useState } from 'react';

export default function PlanDate({
  toggleButton,
  toggleSchedule,
  item,
  index,
  setToggleSchedule,
  handleResetButtonClick,
}) {
  const { resetHotelPositions, resetPlacePositions } = useScheduleStore();

  const id = useId();
  return (
    <>
      <div key={id} className="mx-5 my-4 flex items-center gap-[10px] py-3 ">
        <span key={index} className="font-bold">
          Day {index + 1}
        </span>
        <span className="aria-hidden:">|</span>
        <span className="text-[14px] text-contentsSecondary">
          {getTripDate(getTripDateUTC(item))}
        </span>
        <button key={index + 1} type="button " onClick={handleResetButtonClick}>
          <img src={toggleSchedule ? toggleDown : toggleUp} alt="일정 펼치기" />
        </button>
      </div>
      <hr />
    </>
  );
}
