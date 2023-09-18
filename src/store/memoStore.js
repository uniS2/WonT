import { create } from 'zustand';

const useMemosStore = create((set) => ({
  memo: '',
  setMemo: (text) => set({ memo: text }),
}));

export default useMemosStore;
