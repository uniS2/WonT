import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useMapStore = create(
  devtools((set) => ({
    localData: [],
    category: 'SW8',
    markers: [],
    setLocalData: (data) =>
      set((state) => ({
        localData: [
          data
        ]
      }),
        false,
        'localData/map'
      ),
    setCategory: (data) =>
      set((state) => ({
        category: data
      }),
        false,
        'category'
      ),
    setMarkers: (data) =>
      set((state) => ({
        markers: [
          ...state.markers,
          {
            id: data.id,
            ...data,
          }
        ]
      }),
        false,
        'markers'
      )
  }))
)