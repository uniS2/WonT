import { useParams } from 'react-router-dom';

import TripPlaceImage from '@/components/TripSelect/TripPlaceImage';
import TripPlaceInfo from '@/components/TripSelect/TripPlaceInfo';
import AddButton from '@/components/TripSelect/AddButton';
import { useMapStore } from '@/store/mapStore';
import { useScheduleStore } from '@/store/scheduleStore';

export default function TripHotelItem({ placeName, address, count }) {
  const { hotelList } = useMapStore(); // 숙소 목록
  const { hotelPositions, addHotelPositions } = useScheduleStore(); // 추가한 숙소
  const currentPath = useParams(); // 현재 경로

  // 버튼 선택 여부
  const isHotel = hotelPositions[currentPath.indexId]?.filter(
    (item) => item.place_name == placeName
  );

  // 버튼 클릭시
  const handleClick = () => {
    addHotelPositions(hotelList[count], currentPath.indexId);
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
