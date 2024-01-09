// import { create } from 'zustand';
// import { devtools } from 'zustand/middleware';

// export const MapStore = create(
//   devtools((set) => ({
//     // state
//     // 지도에 표시되는 장소 목록
//     placeList: [],
//     // 지도에 표시되는 숙소 목록
//     hotelList: [],
//     // action
//     // 지도에 표시할 장소 목록 지정
//     setPlaceList: (data: string[]) =>
//       set(
//         () => ({
//           placeList: data,
//         }),
//         false,
//         'place/list'
//       ),
//     // 지도에 표시할 숙소 목록 지정
//     setHotelList: (data: string) =>
//       set(
//         () => ({
//           hotelList: data,
//         }),
//         false,
//         'hotel/list'
//       ),
//   }))
// );

/* -------------------------------------------------------------------------- */

import { StateCreator, create } from 'zustand';
import { DevtoolsOptions, devtools, persist } from 'zustand/middleware';

// export const MapStore = create(
//   devtools((set) => ({
//     // state
//     // 지도에 표시되는 장소 목록
//     placeList: [],
//     // 지도에 표시되는 숙소 목록
//     hotelList: [],
//     // action
//     // 지도에 표시할 장소 목록 지정
//     setPlaceList: (data: string[]) =>
//       set(
//         () => ({
//           placeList: data,
//         }),
//         false,
//         'place/list'
//       ),
//     // 지도에 표시할 숙소 목록 지정
//     setHotelList: (data: string) =>
//       set(
//         () => ({
//           hotelList: data,
//         }),
//         false,
//         'hotel/list'
//       ),
//   }))
// );

export interface MapStoreState {
  placeList: [];
  hotelList: [];
  setPlaceList: (data: string[]) => void;
  setHotelList: (data: string[]) => void;
}

// 초기 상태 정의
const initialState: MapStoreState = {
  placeList: [],
  hotelList: [],
  setPlaceList: (data: string[]) => {},
  setHotelList: (data: string[]) => {},
};

export const MapStore = create<MapStoreState>((set) => initialState);
