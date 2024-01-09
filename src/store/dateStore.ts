// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

// export const DateStore = create(
//   devtools((set) => ({
//     tripDate: new Date(),
//     setDate: (e) => set(() => ({ tripDate: e }), false, 'tripDate'),
//   }))
// );

/* -------------------------------------------------------------------------- */

import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DateStoreState {
  tripDate: Date[];
  setDate: (e: Date[]) => void;
}

// export const DateStore = create<DateStoreState>(
//   devtools((set) => ({
//     tripDate: [new Date()],
//     setDate: (e: Date[]) => set(() => ({ tripDate: e }), false, 'tripDate'),
//   }))
// );

// # Type 이슈로 인한 devtools 제거
export const DateStore = create<DateStoreState>((set) => ({
  tripDate: [new Date()],
  setDate: (e: Date[]) => set({ tripDate: e }),
}));
