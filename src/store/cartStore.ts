import { atom, selector, selectorFamily } from "recoil";

import { Coffe } from "../mock/coffees.mock";

type Product = {
  product_id: string;
  quantity: number;
};

const localStorageeKey = "coffee@cart";

export const cartState = atom<Product[]>({
  default: [],
  key: "cartStateAtom",
  effects: [
    ({ onSet }) => {
      onSet((products) => {
        localStorage.setItem(localStorageeKey, JSON.stringify(products));
      });
    },
  ],
});

export const cartQuantityState = selector({
  key: "cartQuantityStateSelector",
  get: ({ get }) =>
    get(cartState).reduce((acc, product) => {
      console.log({ product });
      acc += product.quantity || 0;

      return acc;
    }, 0),
});

export const currentProductStateQuantity = selectorFamily<number, string>({
  key: "currentProductStateQuantitySelectorFamily",
  get:
    (productId) =>
    ({ get }) =>
      get(cartState).find(({ product_id }) => product_id === productId)
        ?.quantity || 0,

  set:
    (id) =>
    ({ get, set }, newValue) => {
      const product = get(cartState).find(
        ({ product_id }) => product_id === id
      );

      const newQuantity = Number(newValue);

      if (!product) {
        const newProduct = [
          ...get(cartState),
          { product_id: id, quantity: newQuantity },
        ];
        set(cartState, newProduct);
      }

      if (product) {
        const newProducts = get(cartState).map((p) => {
          if (p.product_id === id && newQuantity >= 0) {
            return { ...p, quantity: newQuantity };
          }

          return p;
        });

        set(cartState, newProducts);
      }
    },
});

type ProductCart = Coffe & { quantity: number };

export const checkoutCardProductsState = atom({
  key: "checkoutCardProductsStateAtom",
  default: selector<ProductCart[]>({
    key: "checkoutCardProductsStateAtom/checkoutCardProductsStateSelect",
    get: async ({ get }) => {
      const storagedProducts = get(cartState);

      const { coffees } = (await fetch("/api/coffees").then((res) =>
        res.json()
      )) as { coffees: ProductCart[] };

      const products: ProductCart[] = [];

      coffees.forEach((coffee) => {
        storagedProducts.forEach((product) => {
          if (coffee.id === product.product_id) {
            products.push({ ...coffee, quantity: product.quantity });
          }
        });
      });

      return products;
    },
  }),
});

export const cartTotalPriceState = selector({
  key: "cartTotalPriceStateSelector",
  get: async ({ get }) => {
    const cartProducts = get(checkoutCardProductsState);

    return cartProducts.reduce((acc, product) => {
      acc += product.price * product.quantity;

      return acc;
    }, 0);
  },
});
