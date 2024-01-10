import { create } from 'zustand';
//$ import { devtools } from 'zustand/middleware';

export const useLocalStore = create((set) => ({
  selectName: null, // 선택된 LocalItem 이름를 저장하는 변수
  selectIndex: null, // 선택된 LocalItem 인덱스를 저장하는 변수
  setSelectIndex: (index: number) => set(() => ({ selectIndex: index })),
  setSelectName: (name: string) => set(() => ({ selectName: name })),
}));
