import TripHeader from '@/components/Header/TripHeader';
import Map from '@/components/Map';
import HambugerButton from '@/components/TripPlace/HambugerButton';
import TripPlan from '@/components/TripPlan';
import { useToggleTripPlanStore } from '@/store/toggleTripPlanStore';

export default function TripPlacePage() {
  const { displayPlaceTripPlan, togglePlaceTripPlan } =
    useToggleTripPlanStore();
  return (
    <section className="container relative mx-auto">
      <h1 className="sr-only">여행 장소 선택 페이지</h1>
      <TripHeader />
      <div className="absolute z-10 w-full rounded-b-3xl bg-[#E4F5FF]">
        {displayPlaceTripPlan && <TripPlan background="bg-[#E4F5FF]" />}
        <div className="flex justify-center">
          <HambugerButton onClick={togglePlaceTripPlan} />
        </div>
      </div>
      <Map width="w-full" height="min-h-[18.75rem]" className="mt-[1.125rem]" />
    </section>
  );
}
