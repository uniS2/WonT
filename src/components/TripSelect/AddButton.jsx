import PlusIcon from '@/components/TripSelect/PlusIcon';

export default function AddButton() {
  return (
    <button
      type="button"
      className="flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-md bg-secondary"
    >
      <PlusIcon />
    </button>
  );
}
