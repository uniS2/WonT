import { Link } from 'react-router-dom';

import ButtonLarge from '@/components/ButtonLarge';
import TripHeader from '@/components/Header/TripHeader';
import TripCalendar from '@/components/TripCalendar/TripCalendar';
import TripTitle from '@/components/TripTitle';
import { createRecord, getLocalName, getTripDateUTC } from '@/utils/index.js';
import { useDateStore } from '@/store/dateStore';
import { useLocalStore } from '@/store/localStore';

async function createMyScheduleTitle(title, date) {
  createRecord('mySchedule', {
    title: getLocalName(title),
    start_date: getTripDateUTC(date[0]),
    end_date: getTripDateUTC(date[1]),
  });
}

export default function TripCalendarPage() {
  const { selectName } = useLocalStore();
  const { tripDate } = useDateStore();

  return (
    <section className="mx-auto flex min-h-[50rem] min-w-[22.5rem] flex-col items-center pb-[2.3125rem]">
      <TripHeader isBack={false} isLogo={false} />
      <h1 className="sr-only">여행 날짜 선택 페이지</h1>
      <TripTitle
        question={'언제 떠나시나요?'}
        guide={'여행 일자를 선택하세요.'}
      />
      <TripCalendar />
      {/* 수정시 : selectName, calendar 날짜 비교 => 틀리면 선택완료시 수정 */}
      {Array.isArray(tripDate) ? (
        <Link to="/tripedit">
          <ButtonLarge
            onClick={() => createMyScheduleTitle(selectName, tripDate)}
          >
            선택 완료
          </ButtonLarge>
        </Link>
      ) : (
        <ButtonLarge>선택 완료</ButtonLarge>
      )}
    </section>
  );
}
