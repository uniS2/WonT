import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const useBookmarkStore = create(
  devtools((set) => ({
    bookmarkList: false, // 초기값으로 false 설정
    setBookmarkList: () =>
      set(
        (state) => ({ bookmarkList: !state.bookmarkList }),
        false,
        'bookmarklist'
      ),
  }))
);

export default useBookmarkStore;
