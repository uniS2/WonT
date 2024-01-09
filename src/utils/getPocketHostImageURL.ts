// export const getPocketHostImageURL = (item, fileName = 'image') =>
//   `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
//     item[fileName]
//   }`;

// export const getImageArrayURL = (item: string, image: string) =>
//   `${getPocketHostImageURL(item, '').replace('undefined', '')}/${image}`;

// getPocketHostImageURL.ts
import { LocalItem } from '@/types/Locals';
import { MyScheduleItem } from '@/types/MySchedule';
import { RecommenItem } from '@/types/Recommens';
import { TravelItem } from '@/types/Travels';
import { RecordModel } from 'pocketbase';

// #타입 정의
export type ItemType =
  | LocalItem
  | MyScheduleItem
  | RecommenItem
  | TravelItem
  | RecordModel;

export const getPocketHostImageURL = <key extends keyof ItemType>(
  item: ItemType,
  image: key = 'image' as key
) =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[image]
  }`;
export const getImageArrayURL = <key extends keyof ItemType>(
  item: ItemType,
  image: string
) =>
  `${getPocketHostImageURL(item, 'image' as key).replace(
    'undefined',
    ''
  )}/${image}`;
