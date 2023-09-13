import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useToggleTripPlanStore = create(
  devtools((set) => ({
    displayPlaceTripPlan: true,
    displayHotelTripPlan: true,
    togglePlaceTripPlan: () =>
      set(
        (state) => ({
          displayPlaceTripPlan: !state.displayPlaceTripPlan,
        }),
        false,
        'placeTripPlan/toggler'
      ),
    toggleHotelTripPlan: () =>
      set(
        (state) => ({
          displayHotelTripPlan: !state.displayHotelTripPlan,
        }),
        false,
        'hotelTripPlan/toggler'
      ),
  })));