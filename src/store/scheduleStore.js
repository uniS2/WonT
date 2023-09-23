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
    addHotelPositions: (hotelPosition) =>
      set(
        (state) => ({
          hotelPositions: [
            ...state.hotelPositions,
            {
              id: hotelPosition.id,
              ...hotelPosition,
            },
          ],
        }),
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
