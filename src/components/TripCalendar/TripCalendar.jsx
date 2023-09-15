import { useState } from 'react';
import Calendar from 'react-calendar';
import '@/styles/calendar.css';

export default function TripCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <Calendar
        locale="en"
        onChange={setDate} // useState로 포커스 변경 시 현재 날짜 받아오기
        selectRange={true} // 기간 설정
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        next2Label={null} // 토글: 년 단위 이동 버튼
        prev2Label={null}
        // showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
        className={
          'h-[19.875rem w-[19.875rem] p-[1.3475rem] text-contentsPrimary'
        }
      />
      {date.length > 0 ? (
        <p className="text-center">
          <span className="font-bold">
            Start<span className="aria-hidden font-bold">:</span>
          </span>
          {date[0].getMonth()}
          &nbsp;|&nbsp;
          <span className="font-bold">
            End<span className="aria-hidden font-bold">:</span>
          </span>
          {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="font-bold">
            We On Trip<span className="aria-hidden font-bold">: </span>
          </span>
          {date.toDateString()}
        </p>
      )}
    </>
  );
}
