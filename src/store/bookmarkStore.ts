// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

// export const useBookmarkStore = create(
//   devtools((set) => ({
//     bookmarkList: [],
//     setBookmarkList: (itemId: string): void =>
//       set(
//         (state) => ({
//           bookmarkList: [...state.bookmarkList, itemId],
//         }),
//         false,
//         'bookmarkList'
//       ),
//     deleteBookmarkList: (itemId: string) =>
//       set(
//         (state: { bookmarkList: string[] }) => ({
//           bookmarkList: state.bookmarkList.filter(
//             (item: string) => item !== itemId
//           ),
//         }),
//         false,
//         'bookmarkList/delete'
//       ),
//   }))
// );
/* -------------------------------------------------------------------------- */
import { create } from 'zustand';

// #타입 오류로 devtools 미들웨어 제거함..

type State = {
  bookmarkList: string[];
  setBookmarkList: (itemId: string) => void;
  deleteBookmarkList: (itemId: string) => void;
};

export const BookmarkStore = create<State>((set) => ({
  bookmarkList: [],
  setBookmarkList: (itemId: string): void =>
    set((state) => ({
      bookmarkList: [...state.bookmarkList, itemId],
    })),
  deleteBookmarkList: (itemId: string) =>
    set((state) => ({
      bookmarkList: state.bookmarkList.filter(
        (item: string) => item !== itemId
      ),
    })),
}));
