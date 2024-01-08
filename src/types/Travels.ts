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
  count?: string;
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
  onClick?: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
  color: string;
  height?: string;
  textColor: string;
  children: string;
  [key: string]: any;
}

export type ErrorType = {
  type: string;
  message: string;
};

export interface SelectBookmarkItem {
  main: any;
  item: {
    id: Key | null | undefined;
    place_name: string;
    category_name: string;
    address_name: string;
    index: number;
    collectionId?: string;
    collectionName?: string;
    updated?: string;
    created?: string;
  };
}
export interface RecordModel {
  item: {
    id: Key | null | undefined;
    place_name: string;
    category_name: string;
    address_name: string;
    index: number;
    collectionId?: string;
    collectionName?: string;
    updated?: string;
    created?: string;
  };
}
