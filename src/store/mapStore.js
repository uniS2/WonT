import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useMapStore = create(
  devtools((set) => ({
    localData: [],
    category: [],
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
        Category: [
          ...state.category,
          {
            id: data.id,
            ...data,
          }
        ]
      }),
        false,
        'category'
      )
  }))
)