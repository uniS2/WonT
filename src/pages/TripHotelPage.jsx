import { Helmet } from 'react-helmet-async';

import TripHeader from '@/components/Header/TripHeader';
import HambugerButton from '@/components/TripSelect/HambugerButton';
import MapHotel from '@/components/TripSelect/MapHotel';
import TripPlaceItem from '@/components/TripSelect/TripPlaceItem';
import TripPlanMenu from '@/components/TripSelect/TripPlanMenu';
import AddPlaceItem from '@/components/TripSelect/AddPlaceItem';
import { useMapStore } from '@/store/mapStore';
import { useToggleTripMenuStore } from '@/store/toggleTripMenuStore';
import { useScheduleStore } from '@/store/scheduleStore';
import { useParams } from 'react-router-dom';

export default function TripHotelPage() {
  const {
    displayHotelTripPlan,
    displayHotelList,
    toggleHotelTripPlan,
    toggleHotelList,
  } = useToggleTripMenuStore(); // 토글 메뉴
  const { hotelList } = useMapStore(); // 지도에 표시되는 숙소 목록
  const { hotelPositions } = useScheduleStore(); // 추가한 장소
  const currentIndex = useParams().indexId; // 현재 경로

  return (
    <>
      <Helmet>
        <title>TripHotel - WonT</title>
      </Helmet>
      <section className="container relative mx-auto min-h-[50rem] ">
        <h1 className="sr-only">TripHotelPage</h1>
        <TripHeader />
        <TripPlanMenu
          state={displayHotelTripPlan}
          action={toggleHotelTripPlan}
        />
        <MapHotel />
        <ul
          id="hotelsList"
          className="mx-7 my-7 flex h-[23.1875rem] flex-col gap-[0.5625rem] overflow-y-scroll sm:h-[28.5625rem] md:grid md:grid-cols-2 lg:grid-cols-3 xl:h-[34.5rem]"
        >
          {hotelList?.map((hotel, index) => (
            <TripPlaceItem
              key={hotel.id}
              placeName={hotel.place_name}
              address={hotel.road_address_name}
              count={index}
            />
          ))}
        </ul>
        <div className="modal absolute bottom-0 z-10 w-full rounded-t-3xl bg-[#E4F5FF]">
          <HambugerButton onClick={toggleHotelList} />
          {displayHotelList && (
            <div className="mx-[1.8125rem] mt-[0.5rem] min-h-[7.125rem]">
              <h2 className="mb-[0.625rem] text-base font-light text-contentsPrimary">
                숙소
              </h2>
              {Array.isArray(hotelPositions[currentIndex]) ? (
                <ul className="mb-[0.625rem] flex h-[9.5rem] flex-col gap-[0.625rem] overflow-y-scroll md:grid md:grid-cols-2 lg:grid-cols-4">
                  {hotelPositions[currentIndex]?.map((item, index) => (
                    <AddPlaceItem
                      placeName={item.place_name}
                      count={index + 1}
                    />
                  ))}
                </ul>
              ) : (
                <span className="absolute left-1/2 top-1/2 -translate-x-[4.5rem] text-lg font-medium text-[#5A80A9]/50">
                  숙소를 추가해주세요.
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
