import ButtonLarge from '@/components/ButtonLarge';
import Header from '@/components/Header/Header';
import LocalItem from '@/components/TripLocal/LocalItem';
import TripTitle from '@/components/TripTitle';

// 여행 지역 선택 페이지
function TripLocalPage() {
  return (
    <section className="flex min-h-[50rem] flex-col items-center bg-background">
      <h1 className="sr-only">여행 지역 선택 페이지</h1>
      <TripTitle
        question={'어디로 떠나시나요?'}
        guide={'여행할 지역을 선택하세요.'}
      />
      <LocalItem />
      <ButtonLarge>선택 완료</ButtonLarge>
    </section>
  );
}

export default TripLocalPage;
