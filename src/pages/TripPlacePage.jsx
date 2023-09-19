import { useToggleTripMenuStore } from '@/store/toggleTripMenuStore';

import TripHeader from '@/components/Header/TripHeader';
import MapSearch from '@/components/MapSearch';
import HambugerButton from '@/components/TripSelect/HambugerButton';
import TripPlaceItem from '@/components/TripSelect/TripPlaceItem';
import TripPlanMenu from '@/components/TripSelect/TripPlanMenu';
import AddPlaceItem from '@/components/TripSelect/addPlaceItem';

export default function TripPlacePage() {
  const {
    displayPlaceTripPlan,
    displayPlaceList,
    togglePlaceTripPlan,
    togglePlaceList,
  } = useToggleTripMenuStore();

  return (
    <section className="container relative mx-auto min-h-[50rem]">
      <h1 className="sr-only">여행 장소 선택 페이지</h1>
      <TripHeader />
      <TripPlanMenu state={displayPlaceTripPlan} action={togglePlaceTripPlan} />
      <div className="map_wrap relative">
        <MapSearch />
        <ul
          id="category"
          className="modal absolute left-3 top-3 z-10 flex gap-1 overflow-hidden rounded-md border border-solid border-primary bg-background"
        >
          <li id="BK9" data-order="0">
            <span className="bank"></span>
            은행
          </li>
          <li id="MT1" data-order="1">
            <span className="mart"></span>
            마트
          </li>
          <li id="PM9" data-order="2">
            <span className="pharmacy"></span>
            약국
          </li>
          <li id="OL7" data-order="3">
            <span className="oil"></span>
            주유소
          </li>
          <li id="CE7" data-order="4">
            <span className="cafe"></span>
            카페
          </li>
          <li id="CS2" data-order="5">
            <span className="store"></span>
            편의점
          </li>
        </ul>
      </div>

      <ul className="mx-7 my-7 flex h-[23.1875rem] flex-col gap-[0.5625rem] overflow-y-scroll">
        <TripPlaceItem />
        <TripPlaceItem />
        <TripPlaceItem />
      </ul>
      <div className="modal absolute bottom-0 z-10 w-full rounded-t-3xl bg-[#E4F5FF]">
        {/* 
        1. placeList 이 없을 경우 : 기본 유지
        2. placeList 을 추가한-있을-경우 : 최대 3개까지
        3. placeList 을 추가 && 펼칠 때 : 지도 하단 라인까지
        4. 접힐 경우 생각해보기
        */}
        <HambugerButton onClick={togglePlaceList} />
        {displayPlaceList && (
          <div className="mx-[1.8125rem] mt-[0.5rem] min-h-[7.125rem]">
            <h2 className="mb-[0.625rem] text-base font-light text-contentsPrimary">
              장소
            </h2>
            {/* <span className="absolute left-1/2 top-1/2 -translate-x-[4.5rem] text-lg font-medium text-[#5A80A9]/50">
              장소를 추가해주세요.
            </span> */}
            <ul className="mb-[0.625rem] flex flex-col gap-[0.625rem]">
              <AddPlaceItem />
              <AddPlaceItem />
              <AddPlaceItem />
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
