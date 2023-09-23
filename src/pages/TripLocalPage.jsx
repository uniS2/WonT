import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import ButtonLarge from '@/components/ButtonLarge';
import TripHeader from '@/components/Header/TripHeader';
import LocalItem from '@/components/TripLocal/LocalItem';
import TripTitle from '@/components/TripTitle';
import { useLocalStore } from '@/store/localStore';
import { getPocketHostImageURL, getPocketHostURL } from '@/utils/index.js';
import { Helmet } from 'react-helmet-async';

async function fetchLocals() {
  const response = await fetch(`${getPocketHostURL('locals')}`);
  return await response.json();
}

export default function TripLocalPage() {
  const { data, error } = useQuery(['locals'], fetchLocals, {
    retry: 2,
  });

  const selectIndex = useLocalStore((state) => state.selectIndex);
  const isSelect = selectIndex !== null;

  if (error) {
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>TripLocal - WonT</title>
      </Helmet>
      <section className="container mx-auto flex min-h-[50rem] flex-col items-center  bg-background pb-[2.3125rem]">
        <TripHeader isBack={false} />
        <h1 className="sr-only">여행 지역 선택 페이지</h1>
        <TripTitle
          question={'어디로 떠나시나요?'}
          guide={'여행할 지역을 선택하세요.'}
        />
        <ul className="mb-9 flex w-full flex-col gap-[0.625rem] md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {data?.items?.map((item) => (
            <LocalItem
              key={item.id}
              image={item.image ? getPocketHostImageURL(item) : null}
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
    </>
  );
}
