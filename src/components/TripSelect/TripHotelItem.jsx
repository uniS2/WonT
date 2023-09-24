import TripPlaceImage from '@/components/TripSelect/TripPlaceImage';
import TripPlaceInfo from '@/components/TripSelect/TripPlaceInfo';
import AddButton from '@/components/TripSelect/AddButton';
import { useMapStore } from '@/store/mapStore';
import { useScheduleStore } from '@/store/scheduleStore';

export default function TripHotelItem({ placeName, address, count, index }) {
  const { hotelList } = useMapStore(); // 숙소 목록
  const { hotelPositions, addHotelPositions, deleteHotelPositions } =
    useScheduleStore(); // 추가한 숙소

  // 버튼 선택 여부
  const isHotel = hotelPositions[index]?.filter(
    (hotel) => hotel.place_name == placeName
  );

  // 버튼 삭제 여부
  const isSelected = hotelPositions[index]?.some(
    (hotel) => hotel.place_name === placeName
  );

  // 버튼 클릭시
  const handleClick = () => {
    if (!isSelected) {
      addHotelPositions(hotelList[count], index);
    } else {
      deleteHotelPositions(index, placeName);
    }
  };

  return (
    <li className="h-[5.375rem] bg-background py-[0.8125rem] pl-[0.8125rem] pr-[1.625rem]">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-[0.625rem]">
          <TripPlaceImage />
          <TripPlaceInfo placeName={placeName} address={address} />
        </div>
        <AddButton onClick={handleClick} isSelect={isHotel} />
      </div>
    </li>
  );
}
