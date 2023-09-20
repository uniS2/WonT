import TripHeader from '@/components/Header/TripHeader';
import HambugerButton from '@/components/TripSelect/HambugerButton';
import MapHotel from '@/components/TripSelect/MapHotel';
import TripPlaceItem from '@/components/TripSelect/TripPlaceItem';
import TripPlanMenu from '@/components/TripSelect/TripPlanMenu';
import { useToggleTripMenuStore } from '@/store/toggleTripMenuStore';

export default function TripHotelPage() {
  const {
    displayHotelTripPlan,
    displayHotelList,
    toggleHotelTripPlan,
    toggleHotelList,
  } = useToggleTripMenuStore();

  return (
    <section className="container relative mx-auto">
      <h1 className="sr-only">TripHotelPage</h1>
      <TripHeader />
      <TripPlanMenu state={displayHotelTripPlan} action={toggleHotelTripPlan} />
      <MapHotel />
      <ul className="mx-7 my-7 flex h-[23.1875rem] flex-col gap-[0.5625rem] overflow-y-scroll">
        <TripPlaceItem />
      </ul>
      <div className="modal absolute bottom-0 z-10 w-full rounded-t-3xl bg-[#E4F5FF]">
        <HambugerButton onClick={toggleHotelList} />
        {displayHotelList && (
          <div className="mx-[1.8125rem] mt-[0.5rem] min-h-[7.125rem]">
            <h2 className="text-base font-light text-contentsPrimary ">숙소</h2>
            <span className="absolute left-1/2 top-1/2 -translate-x-[4.5rem] text-lg font-medium text-[#5A80A9]/50">
              숙소를 추가해주세요.
            </span>
            {/* <ul></ul> */}
          </div>
        )}
      </div>
    </section>
  );
}
