import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useMapStore = create(
  devtools((set) => ({
    // state - 장소 선택
    placeList: [],
    // state - 숙소 선택
    hotelList: [],
    // action - 장소 선택
    setPlaceList: (data) =>
      set((state) => ({
        placeList: data
      }),
        false,
        'place/list'
      ),
    // action - 숙소 선택
    setHotelList: (data) =>
      set((state) => ({
        hotelList: data
      }),
        false,
        'hotel/list'),
  }))
)