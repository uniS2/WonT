import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// export const useButtonStore = create(
//   devtools((set) => ({
//     editBackgroundColor: 'bg-transparent',
//     editTextColor: 'text-contentsSecondary',
//     editMouseOver: () =>
//       set(
//         () => ({
//           editBackgroundColor: 'bg-point',
//           editTextColor: 'text-white',
//         }),
//         false,
//         'editButton/mouseOver'
//       ),
//     editMouseOut: () =>
//       set(
//         () => ({
//           editBackgroundColor: 'bg-transparent',
//           editTextColor: 'text-contentsSecondary',
//         }),
//         false,
//         'editButton/mouseOut'
//       ),
//   }))
// );
/* -------------------------------------------------------------------------- */
interface ButtonStoreState {
  editBackgroundColor: string;
  editTextColor: string;
  editMouseOver: () => void;
  editMouseOut: () => void;
}

const initialState: ButtonStoreState = {
  editBackgroundColor: 'bg-transparent',
  editTextColor: 'text-contentsSecondary',
  editMouseOver: () => {},
  editMouseOut: () => {},
};

export const ButtonStore = create<ButtonStoreState>((set) => initialState);
