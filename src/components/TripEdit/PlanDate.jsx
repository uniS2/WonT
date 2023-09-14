import { useState } from 'react';

export default function PlanDate({ toggleButton }) {
  const handleToggleButton = () => {
    toggleButton();
  };

  return (
    <div className="mx-5 my-4 flex items-center gap-[10px] ">
      <span className="font-bold">Day 1</span>{' '}
      <span className="aria-hidden:">|</span>
      <span className="text-[14px] text-contentsSecondary">2023.10.01</span>
      <button onClick={handleToggleButton}>
        <img src="/src/assets/common-toogle-down.svg" alt="일정 펼치기" />
      </button>
    </div>
  );
}
