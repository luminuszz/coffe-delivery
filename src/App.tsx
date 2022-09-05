import { cartStateId } from "@store/cartStore";
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useRecoilState } from "recoil";

import AppRouter from "./config/Router";
import { useMutationApi } from "./hooks/useMutationApi";
import { createCart, getUserCart } from "./services/cartService";

const App = () => {
  const [cartId, setCartId] = useRecoilState(cartStateId);
  const { data, mutate, loading, error } = useMutationApi<[string], unknown>(
    "/api/cart",
    createCart
  );

  useEffect(() => {
    if (data) localStorage.setItem("cartId", JSON.stringify(data));

    getUserCart(cartId).then((data) => {
      if (!data) {
        mutate(["1"]);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
