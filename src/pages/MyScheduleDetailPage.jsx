import { useNavigate } from 'react-router-dom';
import TripHeader from '@/components/Header/TripHeader';
import { useToggleTripMenuStore } from '@/store/toggleTripMenuStore';
import CalendarIcon from '@/assets/common-calendar.svg';
import TotalScheduleTopic from '@/components/MyScheduleDetail/TotalScheduleTopic';
import DefaultImage from '@/components/DefaultImage';
import CloseIcon from '@/components/CloseIcon';
import Modal from '@/components/Modal';
import ToggleTotalSchedule from '@/components/MyScheduleDetail/ToggleTotalSchedule';
import Map from '@/components/Map';
import ButtonLarge from '@/components/ButtonLarge';
import { Link } from 'react-router-dom';

export default function MyScheduleDetailPage() {
  const navigate = useNavigate();

  const {
    displayTotalschedule,
    displayDeleteModal,
    toggleTotalschedule,
    toggleDeleteModal,
  } = useToggleTripMenuStore();

  // 모달창 '예' 클릭시
  const handleYes = () => {
    // toggleDeleteModal;
    navigate('/myschedule');
  };

  return (
    <section className="container mx-auto flex min-h-[50rem] max-w-7xl flex-col gap-[1.875rem] bg-background">
      <h1 className="sr-only">나의 일정 상세 페이지</h1>
      <TripHeader
        isUserIcon={false}
        restProps={'absolute left-1/2 -translate-x-[1.6875rem]'}
      />
      <ToggleTotalSchedule
        state={displayTotalschedule}
        action={toggleTotalschedule}
      >
        나의 일정
      </ToggleTotalSchedule>
      {displayTotalschedule && (
        <section className="flex flex-col gap-[1.875rem]">
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
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="flex items-center">
                  <img src={CalendarIcon} />
                  <span className="text-sm text-contentsPrimary">여행기간</span>
                </div>
                <span className="pl-1 text-xs font-light text-contentsSecondary">
                  2023.10.01 ~ 2023.10.10
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={toggleDeleteModal}
              className="absolute right-0 top-0 mr-[0.625rem] mt-[0.625rem]"
            >
              <CloseIcon size={'1rem'} color="#828282" />
            </button>
          </div>
          {/* 모달창 */}
          {displayDeleteModal && (
            <Modal handleYes={handleYes} handleNo={toggleDeleteModal}>
              정말 삭제하시겠습니까?
            </Modal>
          )}
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
            <div className="flex flex-col gap-[0.625rem]">
              <TotalScheduleTopic>선택한 장소</TotalScheduleTopic>
              <div className="object-fit flex h-[3.75rem] w-[3.75rem] items-center justify-center overflow-hidden rounded-md bg-[#EFF2F6]">
                <DefaultImage />
              </div>
            </div>
            <div className="flex flex-col gap-[0.625rem]">
              <TotalScheduleTopic>설정한 숙소</TotalScheduleTopic>
              <div className="flex w-fit flex-col items-center gap-[0.3125rem]">
                <div className="w-fit rounded-full bg-point px-4 py-[0.375rem] text-xs font-medium text-background">
                  Day
                  <span className="px-1">1</span>
                </div>
                <div className="object-fit flex h-[3.75rem] w-[3.75rem] items-center justify-center overflow-hidden rounded-md bg-[#EFF2F6]">
                  <DefaultImage />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <hr className="aria-hidden mx-5" />
      <Map height="h-[300px]" width="w-full" />
      <section>
        <h2 className="sr-only">날짜별 일정 보기</h2>
        <ToggleTotalSchedule>Day 1</ToggleTotalSchedule>
      </section>
      <Link to="/tripedit">
        <ButtonLarge
          textColor="text-contentsSecondary border border-contentsSecondary"
          color="bg-transparent"
        >
          일정편집
        </ButtonLarge>
      </Link>
    </section>
  );
}
