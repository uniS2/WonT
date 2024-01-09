import { create } from 'zustand';

const useMemosStore = create((set) => ({
  memo: '',
  setMemo: (text: string) => set({ memo: text }),
}));

export default useMemosStore;
