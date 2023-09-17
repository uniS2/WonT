export default function DetailInfo({ detailPlace }) {
  const filterDetailPlace = Object.fromEntries(
    Object.entries(detailPlace).map(([key, value]) => [
      key,
      value ? value : '-',
    ])
  );

  return (
    <>
      <dl className="mx-auto grid max-w-[1236px] grid-cols-3 gap-3 px-4">
        <span className="col-span-3 text-xl font-medium text-contentsPrimary">
          이용안내
        </span>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 self-center">
          <img
            src="/src/assets/detail-info.svg"
            alt="안내 아이콘"
            className="h-4 w-4"
          />
          <span className="leading-normal text-gray-1">문의 및 안내</span>
        </dt>

        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.info}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img
            src="/src/assets/detail-calendar.svg"
            alt="달력 아이콘"
            className="h-5 w-5"
          />
          <span className="leading-normal text-gray-1">쉬는날</span>
        </dt>
        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.rest}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img
            src="/src/assets/detail-ticket.svg"
            alt="티켓 아이콘"
            className="h-5 w-5"
          />
          <span className="leading-normal text-gray-1">체험 안내</span>
        </dt>
        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.active}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img
            src="/src/assets/detail-clock.svg"
            alt="시계 아이콘"
            className="h-5 w-5"
          />
          <span className="leading-normal text-gray-1">이용시간</span>
        </dt>
        <dd className="leading-normal text-contentsPrimary">
          {filterDetailPlace.time}
        </dd>
        <hr className="col-span-3" />
        <dt className="col-span-2 flex items-center gap-2 ">
          <img
            src="/src/assets/detail-homepage.svg"
            alt="홈페이지 아이콘"
            className="h-5 w-5"
          />
          <span className="leading-normal text-gray-1">홈페이지</span>
        </dt>
        <dd className=" leading-normal text-contentsPrimary">
          <a href={filterDetailPlace.url}>{filterDetailPlace.url}</a>
        </dd>
        <hr className="col-span-3" />
      </dl>
    </>
  );
}
