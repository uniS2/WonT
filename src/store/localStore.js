import { create } from "zustand";

export const useLocalStore = create((set) => ({
  /// state
  selectName: null, // 선택된 LocalItem 이름를 저장하는 변수
  selectIndex: null, // 선택된 LocalItem 인덱스를 저장하는 변수
  // action
  setSelectIndex: (index) => set({ selectIndex: index }),
  setSelectName: (name) => set({ selectName: name })
}));