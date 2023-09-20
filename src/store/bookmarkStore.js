import { create } from 'zustand';

export const useBookmarkStore = create((set) => ({
  bookmarkList: false,
  setBookmarkList: () =>
    set((state) => ({ bookmarkList: !state.bookmarkList })),
}));
