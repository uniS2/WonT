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

const getPocketHostImageURL = (item: any, image: string = 'image') =>
  `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${
    item[image]
  }`;
