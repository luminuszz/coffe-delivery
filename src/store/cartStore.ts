import { atom, selector, selectorFamily } from "recoil";

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
