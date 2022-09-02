import { atom } from "recoil";

import { Coffe } from "../mock/coffees.mock";

type Products = Coffe[];

export const productState = atom<Products>({
  key: "productStateAtom",
  default: [],
});
