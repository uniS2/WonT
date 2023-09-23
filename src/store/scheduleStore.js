import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useScheduleStore = create(
  devtools((set) => ({
    scheduleDetail: [],
    setScheduleDetail: (data) =>
      set(
        () => ({
          bookmarkList: data,
        }),
        false,
        'schedule/detail'
      ),
  }))
);
