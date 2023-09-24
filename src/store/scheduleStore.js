import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useScheduleStore = create(
  devtools((set) => ({
    // TripPlace/Hotel 페이지
    // 추가한 장소 목록
    placePositions: [],
    // 추가한 숙소 목록
    hotelPositions: [],
    // 장소 추가하기
    addPlacePositions: (placePosition) =>
      set(
        (state) => ({
          placePositions: [
            ...state.placePositions,
            {
              id: placePosition.id,
              ...placePosition,
            },
          ],
        }),
        false,
        'placesPositions/add'
      ),
    // 숙소 추가하기
    addHotelPositions: (hotelPosition, index) =>
      set(
        (state) => {
          const updatedHotelPositions = { ...state.hotelPositions };
          if (updatedHotelPositions[index]) {
            updatedHotelPositions[index].push({
              id: hotelPosition.id,
              ...hotelPosition,
            });
          } else {
            updatedHotelPositions[index] = [{
              id: hotelPosition.id,
              ...hotelPosition,
            }];
          }
          return { hotelPositions: updatedHotelPositions };
        },
        false,
        'hotelsPositions/add'
      ),

    // MySchedule/detail 페이지
    scheduleDetail: [],
    setScheduleDetail: (data) =>
      set(
        () => ({
          bookmarkList: data,
        }),
        false,
        'schedule/detail'
      ),
  }))
);

/* 
{
          hotelPositions: [
            ...state.hotelPositions,
            {
              id: hotelPosition.id,
              ...hotelPosition,
            },
          ],
        }
*/