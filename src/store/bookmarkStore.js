import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useBookmarkStore = create(
  devtools((set) => ({
    bookmarkList: false,
    setBookmarkList: (isBookmark) =>
      set(() => ({ bookmarkList: isBookmark }), false, 'bookmarkList'),
  }))
);

export default useBookmarkStore;
