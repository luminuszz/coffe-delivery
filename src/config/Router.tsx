import DefaultLayout from "@components/layouts/DefaultLayout";
import { Route, Routes } from "react-router-dom";

import CheckoutPage from "../pages/checkout/checkout.page";
import HomePage from "../pages/home.page";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
