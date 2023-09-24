import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useSelectRangeStore = create(
  devtools((set) => ({
    selectRange: [],
    setSelectRange: () => set((item) => [...selectRange]),
  }))
);
