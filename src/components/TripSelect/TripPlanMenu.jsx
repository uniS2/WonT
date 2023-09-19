import TripPlan from '@/components/TripPlan';
import HambugerButton from '@/components/TripSelect/HambugerButton';

export default function TripPlanMenu({ state, action }) {
  return (
    <div className="modal absolute z-20 w-full rounded-b-3xl bg-[#E4F5FF]">
      {state && <TripPlan background="bg-[#E4F5FF]" />}
      <HambugerButton onClick={action} />
    </div>
  );
}
