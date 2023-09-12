import { useState } from 'react';
import Calendar from 'react-calendar';
import '@/styles/calendar.css';

export default function TripCalendar() {
  const [value, onChange] = useState(new Date());

  const changeDate = (e) => {
    setDisableButton(false); //버튼 비활성화 푸는 state

    dispatch(
      startDateAction({
        data: moment(e[0]).format('YYYY/MM/DD'),
      })
    );
    dispatch(
      endDateAction({
        data: moment(e[1]).format('YYYY/MM/DD'),
      })
    );
  };

  return (
    <>
      <Calendar
        locale="ko"
        onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
        // formatDay={(locale, date) => moment(date).format('DD')} // 날'일' 제외하고 숫자만 보이도록 설정
        minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
        next2Label={null} // 년 단위 이동 버튼
        prev2Label={null}
        showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
      />
    </>
  );
}
