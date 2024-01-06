export interface DisplayMarkerPlace {
  x: number;
  y: number;
  place_name: string;
}

export interface MapProps {
  width?: string;
  height?: string;
  latitude?: number;
  longitude?: number;
  level?: number;
  [key: string]: any;
}

export interface AddressSearchResult {
  y: number;
  x: number;
  [key: string]: any;
}
