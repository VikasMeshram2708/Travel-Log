import { MapLocationDetails } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type StoreProps = {
  locDetails: MapLocationDetails | null;
  fillLocDetails: (data: MapLocationDetails) => void;
};

export const useStore = create<StoreProps>()(
  persist(
    (set) => ({
      locDetails: null,
      fillLocDetails: (data) => set({ locDetails: data }),
    }),
    {
      name: "travelLog",
      partialize: (state) => ({
        locDetails: state.locDetails,
      }),
    }
  )
);
