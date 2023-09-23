import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useMapStore = create(
  devtools((set) => ({
    // state - 장소 선택
    placeMarkers: [],
    // state - 숙소 선택
    hotelList: [],
    // action - 숙소 선택
    setHotelList: (data) =>
      set((state) => ({
        hotelList: data
      }),
        false,
        'hotel/list'),
    setPlaceMarkers: (data) =>
      set((state) => ({
        placeMarkers: [
          ...state.placeMarkers,
          {
            id: data.id,
            ...data,
          }
        ]
      }),
        false,
        'place/markers'
      )
  }))
)