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
  imageURL: string;
  localName: string;
  startDay: string;
  endDay: string;
}

export interface ToggleTotalScheduleProps {
  [key: string]: any;
}
