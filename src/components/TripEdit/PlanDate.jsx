import toggleDown from '@/assets/common-toogle-down.svg';
import toggleUp from '@/assets/common-toogle-up.svg';

export default function PlanDate({ toggleButton, toggleSchedule }) {
  const handleToggleButton = () => {
    toggleButton();
  };

  return (
    <div className="mx-5 my-4 flex items-center gap-[10px] py-3 ">
      <span className="font-bold">Day 1</span>{' '}
      <span className="aria-hidden:">|</span>
      <span className="text-[14px] text-contentsSecondary">2023.10.01</span>
      <button type="button" onClick={handleToggleButton}>
        <img src={toggleSchedule ? toggleDown : toggleUp} alt="일정 펼치기" />
      </button>
    </div>
  );
}
