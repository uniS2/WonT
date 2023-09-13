import TripHeader from '@/components/Header/TripHeader';
import ToggleDownIcon from '@/components/ToggleDownIcon';
import ToggleUpIcon from '@/components/ToggleUpIcon';
import Calendar from '@/assets/common-calendar.svg';
import { useToggleTripMenuStore } from '@/store/toggleTripMenuStore';
// import CloseIcon from '@/components/CloseIcon';

export default function MyScheduleDetailPage() {
  const { displayTotalschedule, toggleTotalschedule } =
    useToggleTripMenuStore();

  return (
    <section className="container min-h-[50rem] bg-background">
      <h1 className="sr-only">나의 일정 상세 페이지</h1>
      <TripHeader
        isUserIcon={false}
        restProps={'absolute left-1/2 -translate-x-[1.6875rem]'}
      />
      <div className="mx-[1.25rem] flex items-center gap-[0.3125rem] pb-[1.25rem] pt-[1.875rem]">
        <dl>
          <dt className="sr-only">상세 보기</dt>
          <dd className="text-sm font-semibold text-contentsPrimary">
            나의 일정
          </dd>
        </dl>
        <button onClick={toggleTotalschedule}>
          {displayTotalschedule ? (
            <ToggleUpIcon size="1rem" />
          ) : (
            <ToggleDownIcon size="1rem" />
          )}
        </button>
      </div>
      {displayTotalschedule && (
        <div className="flex flex-col gap-[1.875rem]">
          <h2 className="sr-only">전체 일정 한눈에 보기</h2>
          <div className="modal relative mx-[1.25rem] h-[8.125rem] overflow-hidden rounded-md bg-white">
            <img
              src="#"
              alt="지역명"
              className="h-full w-[43.75%] bg-background"
            />
            <div className="absolute right-0 top-0 flex h-full w-[56.23%] flex-col justify-center gap-3 pl-[1.25rem]">
              <span className="font-semibold text-contentsPrimary">
                제주도 여행
              </span>
              <dl className="flex flex-wrap items-center">
                <img src={Calendar} />
                <dt className="text-sm text-contentsPrimary">여행기간</dt>
                <dd className="pl-1 text-xs font-light text-contentsSecondary">
                  2023.10.01 ~ 2023.10.10
                </dd>
              </dl>
            </div>
          </div>
          <div className="modal relative mx-[1.25rem] flex min-h-[20.4375rem] flex-col justify-center gap-[1.25rem] overflow-hidden rounded-md bg-white pl-[1.25rem] pr-[0.625rem]">
            <dl>
              <dt className="sr-only">장소</dt>
              <dd className="text-sm font-bold text-contentsPrimary">
                제주도 여행
              </dd>
              <dt className="sr-only">여행기간</dt>
              <dd className="text-xs font-medium text-contentsSecondary">
                2023.10.01 ~ 2023.10.10
              </dd>
            </dl>
          </div>
        </div>
      )}
    </section>
  );
}
