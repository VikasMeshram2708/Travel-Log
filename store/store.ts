import { CityDetails, CountryDetails } from "@/types";
import { create } from "zustand";

type StoreProps = {
  visitedPlacesCount: 0;
  defaultPlaceCoords: [number, number];
  findCountry: (countryName: string) => Promise<CountryDetails[]>;
  findCity: (text: string) => Promise<CityDetails>;
};

const BaseURL = process.env.NEXT_PUBLIC_COUNTRY_BASE_URL;

// console.log("BaseURL", BaseURL);

export const useStore = create<StoreProps>(() => ({
  visitedPlacesCount: 0,
  defaultPlaceCoords: [27.133662, 81.963219],
  findCountry: async (countryName: string) => {
    try {
      const response = await fetch(
        `${BaseURL}/${encodeURIComponent(countryName)}`
      );
      const json = await response.json();
      // console.log("json", json);
      return json;
    } catch (e) {
      console.error(e);
    }
  },
  findCity: async (text: string) => {
    try {
      const response = await fetch("/api/getcity", {
        method: "POST",
        body: JSON.stringify({ q: text }),
      });
      const json = await response.json();
      // console.log("city-jons", json);
      return json;
    } catch (e) {
      console.error(e);
    }
  },
}));
