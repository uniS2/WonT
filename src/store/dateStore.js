import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useDateStore = create(
  devtools((set) => ({
    tripDate: new Date(),
    setDate: (e) => set(
      () => ({ tripDate: e }),
      false,
      'tripDate'
    ),
  })));