import TripPlaceImage from '@/components/TripSelect/TripPlaceImage';
import TripPlaceInfo from '@/components/TripSelect/TripPlaceInfo';
import AddButton from '@/components/TripSelect/AddButton';
import { useMapStore } from '@/store/mapStore';
import { useScheduleStore } from '@/store/scheduleStore';
import { useEffect } from 'react';

export default function TripPlaceItem({ placeName, address, count }) {
  const { hotelList } = useMapStore(); // 호텔 목록
  const { hotelPositions, addHotelPositions } = useScheduleStore(); // 추가한 숙소

  // 버튼 선택 여부
  const isSelect = hotelPositions.filter(
    (item) => item.place_name == placeName
  );

  // 버튼 클릭시
  const handleClick = () => {
    // if(isSelect)
    addHotelPositions(hotelList[count]);
  };

  useEffect(() => {
    console.log(hotelPositions);
  }, [hotelPositions]);

  return (
    <li className="h-[5.375rem] bg-background py-[0.8125rem] pl-[0.8125rem] pr-[1.625rem]">
      <div className=" flex items-center justify-between">
        <div className="flex items-center gap-[0.625rem]">
          <TripPlaceImage />
          <TripPlaceInfo placeName={placeName} address={address} />
        </div>
        <AddButton onClick={handleClick} isSelect={isSelect} />
      </div>
    </li>
  );
}
