import ButtonLarge from '@/components/ButtonLarge';
import TripHeader from '@/components/Header/TripHeader';
import TripCalendar from '@/components/TripCalendar/TripCalendar';
import TripTitle from '@/components/TripTitle';

// 여행 날짜 선택 페이지
function TripCalendarPage() {
  return (
    <section className="mx-auto flex min-h-[50rem] min-w-[22.5rem] flex-col items-center bg-background pb-[2.3125rem]">
      <TripHeader isLogo={false} />
      <h1 className="sr-only">여행 날짜 선택 페이지</h1>
      <TripTitle
        question={'언제 떠나시나요?'}
        guide={'여행 일자를 선택하세요.'}
      />
      <TripCalendar />
      <ButtonLarge>선택 완료</ButtonLarge>
    </section>
  );
}

export default TripCalendarPage;
