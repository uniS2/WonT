import PlusIcon from '@/components/TripSelect/PlusIcon';

export default function AddButton() {
  return (
    <button
      type="button"
      aria-label="장소 선택"
      className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-md bg-secondary"
    >
      <PlusIcon />
    </button>
  );
}
