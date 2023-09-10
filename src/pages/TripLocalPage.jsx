import ButtonLarge from '@/components/ButtonLarge';
import TripHeader from '@/components/Header/TripHeader';
import LocalItem from '@/components/TripLocal/LocalItem';
import TripTitle from '@/components/TripTitle';
import { getPocketHostImageURL, getPocketHostURL } from '@/utils/index.js';
import { useQuery } from '@tanstack/react-query';

async function fetchLocals() {
  const response = await fetch(`${getPocketHostURL('locals')}`);
  return await response.json();
}

export default function TripLocalPage() {
  const { data } = useQuery(['locals'], fetchLocals, {
    retry: 2,
  });

  // if (isLoading)
  /* if (isError) {
    return {error.toString()}
  } */

  return (
    <section className="mx-auto flex min-h-[50rem] flex-col items-center bg-background pb-[2.3125rem]">
      <TripHeader />
      <h1 className="sr-only">여행 지역 선택 페이지</h1>
      <TripTitle
        question={'어디로 떠나시나요?'}
        guide={'여행할 지역을 선택하세요.'}
      />
      <ul className="mb-9 flex w-full max-w-7xl flex-col gap-[0.625rem]">
        {data?.items?.map((item) => (
          <LocalItem
            key={item.id}
            image={getPocketHostImageURL(item)}
            name={item.name}
          />
        ))}
      </ul>
      <ButtonLarge>선택 완료</ButtonLarge>
    </section>
  );
}
