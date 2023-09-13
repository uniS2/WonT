import TripHeader from '@/components/Header/TripHeader';
import Map from '@/components/Map';
import HambugerButton from '@/components/TripPlace/HambugerButton';
import TripPlan from '@/components/TripPlan';
import { useToggleTripPlanStore } from '@/store/toggleTripPlanStore';

export default function TripHotelPage() {
  const { displayHotelTripPlan, toggleHotelTripPlan } =
    useToggleTripPlanStore();

  return (
    <section className="container relative mx-auto">
      <h1 className="sr-only">TripHotelPage</h1>
      <TripHeader />
      <div className="absolute z-10 w-full rounded-b-3xl bg-[#E4F5FF]">
        {displayHotelTripPlan && <TripPlan background="bg-[#E4F5FF]" />}
        <div className="flex justify-center">
          <HambugerButton onClick={toggleHotelTripPlan} />
        </div>
      </div>
      <Map width="w-full" height="min-h-[18.75rem]" className="mt-[1.125rem]" />
    </section>
  );
}
