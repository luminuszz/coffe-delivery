import { atom, selector } from "recoil";

import fetchUserLocation from "../services/fetchUseLocation";

type Coords = {
  lat: number;
  lng: number;
};

type User = {
  location: Coords | null;
};

export const userState = atom<User>({
  key: "userStateAtom",

  default: {
    location: null,
  },
});

export const userAddressState = selector({
  key: "userAddressStateSelector",
  get: async ({ get }) => {
    const { location } = get(userState);

    if (!location) return "São Paulo, SP";

    try {
      const response = await fetchUserLocation(location);

      return `${response.city}, ${response.stateCode}`;
    } catch (e) {
      return "São Paulo, SP";
    }
  },
});
