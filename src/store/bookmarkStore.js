import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useBookmarkStore = create(
  devtools((set) => ({
    bookmarkList: [],
    setBookmarkList: (itemId) =>
      set(
        (state) => ({
          bookmarkList: [...state.bookmarkList, itemId],
        }),
        false,
        'bookmarkList'
      ),
    deleteBookmarkList: (itemId) =>
      set(
        (state) => ({
          bookmarkList: state.bookmarkList.filter((item) => item !== itemId),
        }),
        false,
        'bookmarkList/delete'
      ),
  }))
);
