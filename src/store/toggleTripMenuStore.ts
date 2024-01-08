// import create from 'zustand';
// import { devtools } from 'zustand/middleware';

// export type ToggleTripMenuStore = {
//   displayPlaceTripPlan: boolean;
//   displayPlaceList: boolean;
//   displayHotelTripPlan: boolean;
//   displayHotelList: boolean;
//   displayTotalschedule: boolean;
//   displayDeleteModal: boolean;
//   displayDaySchedule: boolean;
//   togglePlaceTripPlan: () => void;
//   togglePlaceList: () => void;
//   toggleHotelTripPlan: () => void;
//   toggleHotelList: () => void;
//   toggleTotalschedule: () => void;
//   toggleDeleteModal: () => void;
//   toggleDaySchedule: () => void;
// };

// export const useToggleTripMenuStore = create(
//   devtools((set) => ({
//     displayPlaceTripPlan: true,
//     displayPlaceList: true,
//     displayHotelTripPlan: true,
//     displayHotelList: true,
//     displayTotalschedule: true,
//     displayDeleteModal: false,
//     displayDaySchedule: true,

//     togglePlaceTripPlan: () =>
//       set((state: { displayPlaceTripPlan: boolean }) => ({
//         displayPlaceTripPlan: !state.displayPlaceTripPlan,
//       })),
//     togglePlaceList: () =>
//       set((state: { displayPlaceList: boolean }) => ({
//         displayPlaceList: !state.displayPlaceList,
//       })),
//     toggleHotelTripPlan: () =>
//       set((state: { displayHotelTripPlan: boolean }) => ({
//         displayHotelTripPlan: !state.displayHotelTripPlan,
//       })),
//     toggleHotelList: () =>
//       set((state: { displayHotelList: boolean }) => ({
//         displayHotelList: !state.displayHotelList,
//       })),
//     toggleTotalschedule: () =>
//       set((state: { displayTotalschedule: boolean }) => ({
//         displayTotalschedule: !state.displayTotalschedule,
//       })),
//     toggleDeleteModal: () =>
//       set((state: { displayDeleteModal: boolean }) => ({
//         displayDeleteModal: !state.displayDeleteModal,
//       })),
//     toggleDaySchedule: () =>
//       set((state: { displayDaySchedule: boolean }) => ({
//         displayDaySchedule: !state.displayDaySchedule,
//       })),
//   }))
// );

/* -------------------------------------------------------------------------- */
import create, { State } from 'zustand';
import { devtools } from 'zustand/middleware';

type ToggleTripMenuStore = {
  displayPlaceTripPlan: boolean;
  displayPlaceList: boolean;
  displayHotelTripPlan: boolean;
  displayHotelList: boolean;
  displayTotalschedule: boolean;
  displayDeleteModal: boolean;
  displayDaySchedule: boolean;
  togglePlaceTripPlan: () => void;
  togglePlaceList: () => void;
  toggleHotelTripPlan: () => void;
  toggleHotelList: () => void;
  toggleTotalschedule: () => void;
  toggleDeleteModal: () => void;
  toggleDaySchedule: () => void;
};

export const useToggleTripMenuStore = create<State<ToggleTripMenuStore>>(
  devtools((set) => ({
    displayPlaceTripPlan: true,
    displayPlaceList: true,
    displayHotelTripPlan: true,
    displayHotelList: true,
    displayTotalschedule: true,
    displayDeleteModal: false,
    displayDaySchedule: true,

    togglePlaceTripPlan: () =>
      set((state: { displayPlaceTripPlan: boolean }) => ({
        displayPlaceTripPlan: !state.displayPlaceTripPlan,
      })),
    togglePlaceList: () =>
      set((state: { displayPlaceList: boolean }) => ({
        displayPlaceList: !state.displayPlaceList,
      })),
    toggleHotelTripPlan: () =>
      set((state: { displayHotelTripPlan: boolean }) => ({
        displayHotelTripPlan: !state.displayHotelTripPlan,
      })),
    toggleHotelList: () =>
      set((state: { displayHotelList: boolean }) => ({
        displayHotelList: !state.displayHotelList,
      })),
    toggleTotalschedule: () =>
      set((state: { displayTotalschedule: boolean }) => ({
        displayTotalschedule: !state.displayTotalschedule,
      })),
    toggleDeleteModal: () =>
      set((state: { displayDeleteModal: boolean }) => ({
        displayDeleteModal: !state.displayDeleteModal,
      })),
    toggleDaySchedule: () =>
      set((state: { displayDaySchedule: boolean }) => ({
        displayDaySchedule: !state.displayDaySchedule,
      })),
  }))
);

export const useToggleTripMenu = useToggleTripMenuStore;
