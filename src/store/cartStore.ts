import { productState } from "@store/productsStore";
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
      const currentProductsInCart = get(cartState);

      const product = currentProductsInCart.find(
        (item) => item.product_id === id
      );

      const newQuantity = Number(newValue);

      let newProducts: Product[] = [];

      if (!product) {
        newProducts = [
          ...currentProductsInCart,
          { product_id: id, quantity: newQuantity >= 0 ? newQuantity : 0 },
        ];
      } else {
        if (newQuantity <= 0) {
          set(
            cartState,
            currentProductsInCart.filter((item) => item.product_id !== id)
          );

          return;
        }

        newProducts = currentProductsInCart.map((item) => {
          if (item.product_id === id) {
            return { ...item, quantity: newQuantity >= 0 ? newQuantity : 0 };
          }

          return item;
        });
      }

      set(cartState, newProducts);
    },
});

type ProductCart = Coffe & { quantity: number };

export const checkoutCardProductsState = atom<ProductCart[]>({
  key: "checkoutCardProductsStateAtom",
  default: selector<ProductCart[]>({
    key: "checkoutCardProductsStateAtom/checkoutCardProductsStateSelect",
    get: ({ get }) => {
      const allProducts = get(productState);
      const currentProductsInCart = get(cartState);

      const parsedProducts: ProductCart[] = [];

      allProducts.forEach((item) => {
        currentProductsInCart.forEach((product) => {
          item.id === product.product_id &&
            parsedProducts.push({ ...item, quantity: product.quantity });
        });
      });

      return parsedProducts;
    },
  }),
});

export const cartTotalPriceState = selector({
  key: "cartTotalPriceStateSelector",
  get: ({ get }) => {
    const cartProducts = get(checkoutCardProductsState);

    return cartProducts.reduce((acc, product) => {
      acc += product.price * product.quantity;

      return acc;
    }, 0);
  },
});
