import { create } from 'zustand';

export const useTripScheduleStore = create((set) => ({
  data: null,
  past: [],
  future: [],

  updateData: (newData) =>
    set((state) => ({
      data: newData,
      past: [...state.past, state.data],
      future: [],
    })),

  undo: () =>
    set((state) => ({
      data: state.past.pop(),
      past: state.past,
      future: [state.data, ...state.future],
    })),

  redo: () =>
    set((state) => ({
      data: state.future[0],
      past: [...state.past, state.data],
      future: state.future.slice(1),
    })),

  reset: () => {
    set((state) => ({
      ...state,
      hotelList: [], // 초기화할 상태에 대한 설정
      // 다른 상태들도 초기화 가능
    }));
  },
}));
