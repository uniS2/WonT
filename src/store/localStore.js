import { create } from "zustand";

export const useLocalStore = create((set) => ({
  /// state
  selected: null, // 선택된 LocalItem 인덱스를 저장하는 변수
  setSelectIndex: (index) => set({ selected: index }),
}));