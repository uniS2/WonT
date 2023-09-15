import useRecommendsList from '@/hooks/useRecommendsList';
import { useEffect } from 'react';

export default function DetailInfo({ infoTitle, option }) {
  const { data } = useRecommendsList();
  console.log(data);

  return (
    <>
      {data?.items?.map((item) => (
        <dl
          key={item.id}
          className="mx-auto grid max-w-[1236px] grid-cols-3 gap-3 px-4"
        >
          <span
            className={`col-span-3 text-xl font-medium text-contentsPrimary ${
              infoTitle === 'infoTitle' ? '' : 'hidden, my-4'
            }`}
          >
            이용안내
          </span>
          <dt className="col-span-2 flex items-center gap-2 ">
            <img src="/src/assets/detail-info.svg" alt="" className="h-5 w-5" />
            <span className="leading-normal text-gray-1">{option}</span>
          </dt>
          <dd className="leading-normal text-contentsPrimary">{item.info}</dd>
        </dl>
      ))}
    </>
  );
}
