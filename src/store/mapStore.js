import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useMapStore = create(
  devtools((set) => ({
    localData: [],
    setLocationData: (data) =>
      set((state) => ({
        localData: [
          ...state.localData,
          {
            id: data.id,
            ...data,
          }
        ]
      }),
        false,
        'localData/map'
      )
  }))
)