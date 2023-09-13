import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useToggleTripMenuStore = create(
  devtools((set) => ({
    // state: 여행 장소선택 페이지
    displayPlaceTripPlan: true,
    displayPlaceList: true,
    // state: 여행 숙소선택 페이지
    displayHotelTripPlan: true,
    displayHotelList: true,
    // state: 나의 일정상세 페이지
    displayTotalschedule: true,
    // action: 여행 장소선택 페이지
    togglePlaceTripPlan: () =>
      set(
        (state) => ({
          displayPlaceTripPlan: !state.displayPlaceTripPlan,
        }),
        false,
        'placeTripPlan/toggler'
      ),
    togglePlaceList: () =>
      set(
        (state) => ({
          displayPlaceList: !state.displayPlaceList,
        }),
        false,
        'placeList/toggler'
      ),
    // action: 여행 숙소선택 페이지
    toggleHotelTripPlan: () =>
      set(
        (state) => ({
          displayHotelTripPlan: !state.displayHotelTripPlan,
        }),
        false,
        'hotelTripPlan/toggler'
      ),
    toggleHotelList: () =>
      set(
        (state) => ({
          displayHotelList: !state.displayHotelList,
        }),
        false,
        'hotelList/toggler'
      ),
    toggleTotalschedule: () =>
      set(
        (state) => ({
          displayTotalschedule: !state.displayTotalschedule,
        }),
        false,
        'totalSchedule/toggler'
      )
  })));