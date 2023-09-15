import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useButtonStore = create(
  devtools((set) => ({
    editBackgroundColor: 'bg-transparent',
    editTextColor: 'text-contentsSecondary',
    editMouseOver: () =>
      set(() => ({
        editBackgroundColor: 'bg-point',
        editTextColor: 'text-white',
      }),
        false,
        'editButton/mouseOver'),
    editMouseOut: () =>
      set(() => ({
        editBackgroundColor: 'bg-transparent',
        editTextColor: 'text-contentsSecondary',
      }),
        false,
        'editButton/mouseOut')
  })
  ))