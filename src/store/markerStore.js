import create from 'zustand';

export const useMarkerStore = create((set) => ({
  markers: [],

  addMarker: (marker) => {
    set((state) => ({
      markers: [...state.markers, marker],
    }));
  },
}));
