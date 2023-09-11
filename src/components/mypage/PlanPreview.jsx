import useTravelsList from '@/hooks/useTravlesList';

export default function PlanPreview() {
  const { data } = useTravelsList();
  console.log(data);
  return (
    <div className="h-[262px] max-w-7xl bg-orange-100 py-[120px]">
      <img src="" alt="" />
    </div>
  );
}
