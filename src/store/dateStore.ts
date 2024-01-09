import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface DateStore {
  tripDate: Date[];
  setDate: (e: Date[]) => void;
}

export const useDateStore = create<DateStore>(
  devtools((set) => ({
    tripDate: [new Date()],
    setDate: (e: Date[]) => set(() => ({ tripDate: e }), false, 'tripDate'),
  }))
);
