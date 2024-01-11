// export const getPocketHostImageURL = (item, fileName = 'image') =>
//   `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
//     item[fileName]
//   }`;

// export const getImageArrayURL = (item: string, image: string) =>
//   `${getPocketHostImageURL(item, '').replace('undefined', '')}/${image}`;

// getPocketHostImageURL.ts
import { LocalItem } from '@/types/Locals';
import { MyScheduleItem } from '@/types/MySchedule';
import { RecommendItem } from '@/types/Recommends';
import { TravelItem, TravelsData, UserItems } from '@/types/Travels';
import { RecordModel } from 'pocketbase';

// #타입 정의
export type ItemType =
  | LocalItem
  | MyScheduleItem
  | RecommendItem
  | TravelItem
  | RecordModel
  | UserItems
  | TravelsData
  | MyScheduleItem;

export const getPocketHostImageURL = <key extends keyof ItemType>(
  item: ItemType,
  image: key = 'image' as key
  // place: key = 'place' as key
) =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[image]
  }`;

export const getPocketHostProfileURL = <key extends keyof ItemType>(
  item: ItemType,
  profile: key = 'profile' as key
) =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[profile]
  }`;

export const getImageArrayURL = <key extends keyof ItemType>(
  item: ItemType,
  image?: string
) =>
  `${getPocketHostImageURL(item, 'place' as key).replace(
    'undefined',
    ''
  )}/${image}`;
