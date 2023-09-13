import { Link } from 'react-router-dom';
import ButtonLarge from '@/components/ButtonLarge';
import TripHeader from '@/components/Header/TripHeader';
import LocalItem from '@/components/TripLocal/LocalItem';
import TripTitle from '@/components/TripTitle';
import Spinner from '@/components/Spinner/Spinner';
import { getPocketHostImageURL, getPocketHostURL } from '@/utils/index.js';
import { useQuery } from '@tanstack/react-query';
import { useLocalStore } from '@/store/localStore';

async function fetchLocals() {
  const response = await fetch(`${getPocketHostURL('locals')}`);
  return await response.json();
}

export default function TripLocalPage() {
  // Tanstack Query
  const { data, isLoading, error } = useQuery(['locals'], fetchLocals, {
    retry: 2,
  });

  const { selectName, selectIndex } = useLocalStore();
  const isSelect = selectIndex !== null;

  // 로딩 중인 경우 화면
  if (isLoading) {
    return <Spinner />;
  }

  // 오류가 발생한 경우 화면
  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <section className="container mx-auto flex min-h-[50rem] flex-col items-center bg-background pb-[2.3125rem]">
      <TripHeader isBack={false} />
      <h1 className="sr-only">여행 지역 선택 페이지</h1>
      <TripTitle
        question={'어디로 떠나시나요?'}
        guide={'여행할 지역을 선택하세요.'}
      />
      <ul className="mb-9 flex w-full flex-col gap-[0.625rem]">
        {data?.items?.map((item, index) => (
          <LocalItem
            key={item.id}
            image={getPocketHostImageURL(item)}
            name={item.name}
            index={item.id}
          />
        ))}
      </ul>
      {isSelect ? (
        <Link to="/tripcalendar">
          <ButtonLarge>선택 완료</ButtonLarge>
        </Link>
      ) : (
        <ButtonLarge>선택 완료</ButtonLarge>
      )}
    </section>
  );
}
