import AddPlaceItemContent from '@/components/TripSelect/AddPlaceItemContent';

export default function AddPlaceItem() {
  return (
    <li className="flex h-[2.75rem] items-center gap-[0.3125rem] rounded-md bg-white pl-[0.5625rem]">
      <AddPlaceItemContent bold={'bold'} />
    </li>
  );
}
