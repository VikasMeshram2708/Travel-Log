import { MapLocationDetails } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreProps = {
  addNewLocation: boolean;
  locationDetails: MapLocationDetails | null;
  setLocationDetails: (data: MapLocationDetails) => void;
  clearLocationDetails: () => void;
  toggleAddNewLocationBtn: () => void;
};

export const useStore = create<StoreProps>()(
  persist(
    (set) => ({
      addNewLocation: false,
      locationDetails: null,
      setLocationDetails: (data) => set({ locationDetails: data }),
      clearLocationDetails: () => set({ locationDetails: null }),
      toggleAddNewLocationBtn: () =>
        set((state) => ({ addNewLocation: !state.addNewLocation })),
    }),
    {
      name: "travelLog",
      partialize: (state) => ({
        locationDetails: state.locationDetails,
      }),
    }
  )
);
