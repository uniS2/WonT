import { Key } from 'react';

export interface TravelItem {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  image: string[];
  text: string;
  useremail: string[];
  info: string;
}

export interface Travels {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: TravelItem[];
}

export interface TravelsData {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  image: string[];
  text: string;
  userEmail: string;
  info: string;
}

export interface TravelsDataItems {
  items: {
    id: string;
    collectionId: string;
    collectionName: string;
    created: string;
    updated: string;
    title: string;
    image: string[];
    text: string;
    userEmail: string;
    info: string;
  }[];
}
export interface Position {
  title: string;
  latlng: {
    x: number;
    y: number;
  };
}

export interface DayScheduleItemProps {
  count?: number;
  placeName?: string;
  placeType?: string;
  address?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface TotalScheduleSummaryProps {
  imageURL: string | null;
  localName: string;
  startDay: string;
  endDay: string;
}

export interface ToggleTotalScheduleProps {
  [key: string]: any;
}

export interface ButtonLarge {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  height?: string;
  textColor?: string;
  children?: string;
  restProps?: string;
}

export type ErrorType = {
  type: string;
  message: string;
};

// export interface SelectBookmarkItem {
//   main: string;
//   title: string;
//   start_date: string;
//   end_date: string;

//   items: RecordModel[];
//   places: {
//     1: [
//       {
//         address_name: string;
//         category_group_code: string;
//         category_group_name: string;
//         category_name: string;
//         distance: string;
//         id: string;
//         phone: string;
//         place_name: string;
//         place_url: string;
//         road_address_name: '';
//         x: string;
//         y: string;
//       },
//     ];
//   };
//   hotels: {
//     1: [
//       {
//         address_name: string;
//         category_group_code: string;
//         category_group_name: string;
//         category_name: string;
//         distance: string;
//         id: string;
//         phone: string;
//         place_name: string;
//         place_url: string;
//         road_address_name: '';
//         x: string;
//         y: string;
//       },
//     ];
//   };
//   collectionId?: string;
//   collectionName?: string;
//   updated?: string;
//   created?: string;
//   // id: Key | null | undefined;
//   id: string;
// }

export interface SelectBookmarkItem {
  place: {
    1: [
      {
        address_name: string;
        category_group_code: string;
        category_group_name: string;
        category_name: string;
        distance: string;
        id: string;
        phone: string;
        place_name: string;
        place_url: string;
        road_address_name: '';
        x: string;
        y: string;
      },
    ];
  };
  hotel: {
    1: [
      {
        address_name: string;
        category_group_code: string;
        category_group_name: string;
        category_name: string;
        distance: string;
        id: string;
        phone: string;
        place_name: string;
        place_url: string;
        road_address_name: '';
        x: string;
        y: string;
      },
    ];
  };
  items: [
    {
      id: string;
      collectionId: string;
      collectionName: string;
      created: string;
      updated: string;
      title: string;
      username: string;
      main: string;
      place: [string];
      hotel: [string];
      start_date: string;
      end_date: string;
      places: JSON;
      hotels: JSON;
    },
  ];
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  username: string;
  main: string;
  // place: [string];
  // hotel: [string];
  start_date: string;
  end_date: string;
  places: JSON;
  hotels: JSON;
}

export interface RecordModel {
  item: SelectBookmarkItem;
  // id: Key | null | undefined;
  // main: string;
  // title: string;
  // start_date: string;
  // end_date: string;
  // id: string;
  // collectionId: string;
  // image: string;
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  username: string;
  main: string;
  place: string[];
  hotel: string[];
  start_date: string;
  end_date: string;
  places: JSON;
  hotels: JSON;
}
