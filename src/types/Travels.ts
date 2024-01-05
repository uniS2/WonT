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
