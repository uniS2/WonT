import TripPlaneIcon from '@/components/TripEdit/TripPlaneIcon';

export default function AddPlan({ view, text }) {
  return (
    <>
      <dl className="mx-5 mt-4 flex flex-col gap-[10px]">
        <dt className={`${view ? 'flex' : 'hidden'} items-center gap-2`}>
          <span className="font-bold">Day 1</span>{' '}
          <span className="aria-hidden:">|</span>
          <span className="text-[14px] text-contentsSecondary">2023.10.01</span>
          <button>
            <img src="/src/assets/common-toogle-down.svg" alt="일정 펼치기" />
          </button>
        </dt>
        <dd className="flex h-[52px] items-center gap-2 bg-white px-[10px] ">
          <TripPlaneIcon />
          <p className="font-bold text-contentsPrimary">
            {text}를 추가해주세요.
          </p>
        </dd>
      </dl>
    </>
  );
}
