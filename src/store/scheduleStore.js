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
    addPlacePositions: (placePosition, index) =>
      set(
        (state) => {
          const updatedPlacePositions = { ...state.placePositions };
          if (updatedPlacePositions[index]) {
            updatedPlacePositions[index].push({
              id: placePosition.id,
              ...placePosition,
            });
          } else {
            updatedPlacePositions[index] = [{
              id: placePosition.id,
              ...placePosition,
            }];
          }
          return { placePositions: updatedPlacePositions };
        },
        false,
        'placesPositions/add'
      ),
    // 장소 삭제하기
    deletePlacePositions: (index, placeName) =>
      set(
        (state) => {
          const updatedPlacePositions = { ...state.placePositions };
          if (updatedPlacePositions[index]) {
            updatedPlacePositions[index] = updatedPlacePositions[index].filter(
              (place) => place.place_name !== placeName
            );
          }
          return { placePositions: updatedPlacePositions };
        },
        false,
        'placesPositions/delete'
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
    // 숙소 삭제하기
    deleteHotelPositions: (index, hotelName) =>
      set(
        (state) => {
          const updatedHotelPositions = { ...state.hotelPositions };
          if (updatedHotelPositions[index]) {
            updatedHotelPositions[index] = updatedHotelPositions[index].filter(
              (hotel) => hotel.place_name !== hotelName
            );
          }
          return { hotelPositions: updatedHotelPositions };
        },
        false,
        'hotelsPositions/delete'
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