import useTravelsList from '@/hooks/useTravlesList';

export default function PlanPreview() {
  const { data } = useTravelsList();
  return (
    <div className="mx-auto px-4">
      <div className="relative mx-auto flex justify-center rounded-xl  bg-gradient-to-t from-slate-800/60 via-slate-200/20 ">
        <img
          src="/src/assets/delete/miram-oh-sNxmBz_aJ_k-unsplash.jpg"
          alt=""
          className="h-[360px] min-h-[320px]  w-[1240px] min-w-[320px] justify-center rounded-xl object-cover mix-blend-multiply"
        />
        <div className="absolute bottom-2 left-3 flex flex-col ">
          <span className="text-xl font-semibold text-white">제주도 여행</span>
          <span className="text-sm font-light text-background">
            2023.10.01 - 2023.10.10
          </span>
        </div>
        <span className="absolute bottom-5 right-3 text-xl text-white">
          D-20
        </span>
      </div>
    </div>
  );
}
