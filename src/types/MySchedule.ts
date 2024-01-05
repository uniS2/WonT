interface Place {
  address_name: string;
  category_group_code: string;
  category_group_name: string;
  category_name: string;
  distance: string;
  id: string;
  phone: string;
  place_name: string;
  place_url: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface MyScheduleItem {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  title: string;
  username: string;
  main: string | null;
  place: string[] | null;
  hotel: string[] | null;
  start_date: string | null;
  end_date: string | null;
  places: Place[] | null;
  hotels: Place[] | null;
}

export interface MySchedule {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  items: MyScheduleItem[];
}
