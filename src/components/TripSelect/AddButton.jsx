import CheckIcon from '@/components/TripSelect/CheckIcon';
import PlusIcon from '@/components/TripSelect/PlusIcon';

export default function AddButton({ onClick, isSelect }) {
  return (
    <button
      type="button"
      aria-label="장소 선택"
      onClick={onClick}
      className={`flex h-[1.5rem] w-[1.5rem] items-center justify-center rounded-md ${
        Array.isArray(isSelect) ? 'bg-point' : 'bg-secondary'
      }`}
    >
      {Array.isArray(isSelect) ? <CheckIcon /> : <PlusIcon />}
    </button>
  );
}
