import Calendar from 'react-calendar';

import '@/styles/calendar.css';
import { useDateStore } from '@/store/dateStore';
import { getTripDateKo } from '@/utils/index.js';

// formatMonthYear - debounce 적용필요
const handleFormatMonthYear = (locale, date) => {
  const title = date
    .toLocaleString('ko')
    .replace(' ', '')
    .slice(0, 8)
    .split('.');
  const month = title[1].length < 2 ? `0${title[1]}` : title[1];
  return (
    <dl>
      <dt className="sr-only">표시된 달력의 년도, 월</dt>
      <dd>{`${title[0]}. ${month}`}</dd>
    </dl>
  );
};

/* const handleFormatNextMonthYear = (locale, date) => {
  const title = date
    .toLocaleString('ko')
    .replace(' ', '')
    .slice(0, 8)
    .split('.');
  const month =
    (+title[1] + 1).length < 2 ? `0${+title[1] + 1}` : +title[1] + 1;
  return (
    <dl>
      <dt className="sr-only">표시된 달력의 년도, 월</dt>
      <dd>{`${title[0]}. ${month}`}</dd>
    </dl>
  );
}; */

export default function TripCalendar() {
  const { tripDate, setDate } = useDateStore();

  return (
    <>
      <Calendar
        locale="ko"
        onChange={setDate} // useState로 포커스 변경 시 현재 날짜 받아오기
        selectRange={true} // 기간 설정
        formatMonthYear={handleFormatMonthYear}
        formatDay={(locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        } // day 표현 형식 지정
        minDetail="year" // 상단 네비게이션 최상위 단위 '년도'
        maxDetail="month" // 하단 선택 세부 단위 '월'
        next2Label={null} // 토글: '년' 단위 이동 버튼
        prev2Label={null}
        prevAriaLabel={'전 달로 이동'}
        nextAriaLabel={'다음 달로 이동'}
        tileDisabled={({ activeStartDate, date, view }) => date < new Date()}
        className={
          'h-[19.875rem w-[19.875rem] p-[1.3475rem] text-contentsPrimary'
        }
      />
      {Array.isArray(tripDate) > 0 ? (
        <p className="text-center">
          <span className="font-bold">
            선택한 여행 기간
            <span className="aria-hidden font-bold">: </span>
          </span>
          {getTripDateKo(tripDate[0])}
          <span className="aria-hidden"> - </span>
          {getTripDateKo(tripDate[1])}
        </p>
      ) : (
        <p className="text-center">
          <span className="font-bold">
            오늘 날짜
            <span className="aria-hidden font-bold">: </span>
          </span>
          {getTripDateKo(tripDate)}
        </p>
      )}
    </>
  );
}
