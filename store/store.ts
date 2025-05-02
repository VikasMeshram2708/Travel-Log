import { create } from "zustand";

type StoreProps = {
  visitedPlacesCount: 0;
  defaultPlaceCoords: [number, number];
  addPlace: () => void;
  removePlace: () => void;
};
export const useStore = create<StoreProps>(() => ({
  visitedPlacesCount: 0,
  defaultPlaceCoords: [27.133662, 81.963219],
  addPlace: () => {
    console.log("added");
  },
  removePlace: () => {
    console.log("removed");
  },
}));
