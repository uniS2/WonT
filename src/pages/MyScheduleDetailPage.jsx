import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useToggleTripMenuStore } from '@/store/toggleTripMenuStore';

import TripHeader from '@/components/Header/TripHeader';
import Modal from '@/components/Modal';
import ToggleTotalSchedule from '@/components/MyScheduleDetail/ToggleTotalSchedule';
import Map from '@/components/Map';
import ButtonLarge from '@/components/ButtonLarge';
import DeleteButton from '@/components/DeleteButton';
import TotalScheduleSummary from '@/components/MyScheduleDetail/TotalScheduleSummary';
import DayScheduleItem from '@/components/MyScheduleDetail/DayScheduleItem';
import TotalScheduleView from '@/components/MyScheduleDetail/TotalScheduleView';

export default function MyScheduleDetailPage() {
  // 경로 지정
  const navigate = useNavigate();

  // Store: 전체일정, 모달, 날짜별 일정
  const {
    displayTotalschedule,
    displayDeleteModal,
    displayDaySchedule,
    toggleTotalschedule,
    toggleDeleteModal,
    toggleDaySchedule,
  } = useToggleTripMenuStore();

  // hover 시 버튼 색 지정
  const [backgroundColor, setBackgroundColor] = useState('bg-transparent');
  const [textColor, setTextColor] = useState('text-contentsSecondary');

  // 모달창 '예' 클릭시
  const handleYes = () => {
    // toggleDeleteModal;
    navigate('/myschedule');
  };

  // 편집버튼 'hover'시
  const handleMouseOver = () => {
    setBackgroundColor('bg-point');
    setTextColor('text-white');
  };

  const handleMouseOut = () => {
    setBackgroundColor('bg-transparent');
    setTextColor('text-contentsSecondary');
  };

  return (
    <section className="container relative mx-auto flex min-h-screen max-w-7xl flex-col gap-[1.875rem] bg-background">
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
            <TotalScheduleSummary />
            <DeleteButton onClick={toggleDeleteModal} />
          </div>
          {displayDeleteModal && (
            <Modal handleYes={handleYes} handleNo={toggleDeleteModal}>
              정말 삭제하시겠습니까?
            </Modal>
          )}
          <TotalScheduleView />
        </section>
      )}
      <hr className="aria-hidden mx-5" />
      <Map
        width="w-[85%]"
        height="h-[18rem] sm:h-[22rem] md:h-[26rem] lg:h-[30rem]"
        restProps={'mx-auto modal'}
      />
      <section className="mb-28">
        <h2 className="sr-only">날짜별 일정 보기</h2>
        <ToggleTotalSchedule
          state={displayDaySchedule}
          action={toggleDaySchedule}
        >
          Day 1
        </ToggleTotalSchedule>
        {displayDaySchedule && (
          <>
            <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <DayScheduleItem />
              <DayScheduleItem />
              <DayScheduleItem />
            </ul>
            <ul className="mx-7 mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              <DayScheduleItem
                placeName="숙소명"
                placeType="숙소 분류"
                backgroundColor="bg-point"
                textColor="text-point"
              />
            </ul>
          </>
        )}
      </section>
      <Link to="/tripedit">
        <ButtonLarge
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          textColor={textColor}
          color={backgroundColor}
          restProps="border border-contentsSecondary absolute left-1/2 -translate-x-[11.25rem] bottom-10"
        >
          일정편집
        </ButtonLarge>
      </Link>
    </section>
  );
}
