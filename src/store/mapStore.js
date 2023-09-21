import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useMapStore = create(
  devtools((set) => ({
    hotelMarkers: [],
    placeMarkers: [],
    setHotelMarkers: (data) =>
      set((state) => ({
        hotelMarkers: [
          ...state.hotelMarkers,
          {
            id: data.id,
            ...data,
          }
        ]
      }),
        false,
        'hotel/markers'
      ),
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