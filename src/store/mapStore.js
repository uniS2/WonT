import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useMapStore = create(
  devtools((set) => ({
    // state
    // 지도에 표시되는 장소 목록
    placeList: [],
    // 지도에 표시되는 숙소 목록
    hotelList: [],
    // action
    // 지도에 표시할 장소 목록 지정
    setPlaceList: (data) =>
      set((state) => ({
        placeList: data
      }),
        false,
        'place/list'
      ),
    // 지도에 표시할 숙소 목록 지정
    setHotelList: (data) =>
      set((state) => ({
        hotelList: data
      }),
        false,
        'hotel/list'),
  }))
)