import TripPlaceImage from '@/components/TripSelect/TripPlaceImage';
import TripPlaceInfo from '@/components/TripSelect/TripPlaceInfo';
import AddButton from '@/components/TripSelect/AddButton';
import { useMapStore } from '@/store/mapStore';
import { useScheduleStore } from '@/store/scheduleStore';

interface TripPlaceItemProps {
  placeName: string;
  address: string;
  count: number;
  index: number;
}

function TripPlaceItem({
  placeName,
  address,
  count,
  index,
}: TripPlaceItemProps) {
  const { placeList } = useMapStore(); // 장소 목록
  const { placePositions, addPlacePositions, deletePlacePositions } =
    useScheduleStore(); // 추가한 장소

  // 버튼 선택 여부
  const isPlace = placePositions[index]?.filter(
    (place) => place.place_name == placeName
  );

  // 버튼 삭제 여부
  const isSelected = placePositions[index]?.some(
    (place) => place.place_name === placeName
  );

  // 버튼 클릭시
  const handleClick = () => {
    if (!isSelected) {
      addPlacePositions(placeList[count], index);
    } else {
      deletePlacePositions(index, placeName);
    }
  };

  return (
    <li className="h-[5.375rem] bg-background py-[0.8125rem] pl-[0.8125rem] pr-[1.625rem]">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-[0.625rem]">
          <TripPlaceImage />
          <TripPlaceInfo placeName={placeName} address={address} />
        </div>
        <AddButton onClick={handleClick} isSelect={isPlace} />
      </div>
    </li>
  );
}

export default TripPlaceItem;
