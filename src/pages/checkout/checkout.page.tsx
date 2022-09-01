import AddressStep from "./components/AddressStep";
import CheckoutCart from "./components/CheckoutCart";
import PaymentMethodStep from "./components/PaymentMethodStep";

const CheckoutPage = () => (
  <main className="w-full flex  w-full space-x-[32px]">
    <div className="flex flex-col flex-1 max-w-[640px] ">
      <AddressStep />
      <PaymentMethodStep />
    </div>
    <div className="flex flex-col flex-1 max-w-[448px]">
      <CheckoutCart />
    </div>
  </main>
);

export default CheckoutPage;
