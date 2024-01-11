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

// export interface MyScheduleItem {
//   id: string;
//   collectionId: string;
//   collectionName: string;
//   created: string;
//   updated: string;
//   title: string;
//   username: string;
//   main: string | null;
//   place: string[] | null;
//   hotel: string[] | null;
//   start_date: string | null;
//   end_date: string | null;
//   places: Place[] | null;
//   hotels: Place[] | null;
// }
export interface MyScheduleItem {
  // id: string;
  // collectionId?: string;
  // collectionName?: string;
  // created?: string;
  // updated?: string;
  // title?: string;
  // username: string;
  // main?: string | null;
  // place?: string[] | null;
  // hotel?: string[] | null;
  // start_date?: string | null;
  // end_date?: string | null;
  // places?: Place[] | null;
  // hotels?: Place[] | null;
  collectionId: string;
  collectionName: string;
  created: string;
  end_date: string;
  hotel: string[];
  hotels: Place[] | null;
  id: string;
  main: string;
  place: string[];
  places: Place[] | null;
  start_date: string;
  title: string;
  updated: string;
  username: string;
}

export type MyScheduleItemArray = UserMySchedule;

export interface UserMySchedule {
  id?: string;
  page?: number;
  perPage?: number;
  totalPages?: number;
  totalItems?: number;
  items: MyScheduleItemArray;
}

export interface UserMyScheduleArray {
  items: {
    collectionId: string;
    collectionName: string;
    created: string;
    end_date: string;
    hotel: string[];
    hotels: Place[] | null;
    id: string;
    main: string;
    place: string[];
    places: Place[] | null;
    start_date: string;
    title: string;
    updated: string;
    username: string;
  }[];
}
