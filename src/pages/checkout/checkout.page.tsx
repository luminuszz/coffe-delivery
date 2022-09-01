import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AddressStep from "./components/AddressStep";
import CheckoutCart from "./components/CheckoutCart";
import PaymentMethodStep from "./components/PaymentMethodStep";

export enum PaymentMethod {
  CREDIT_CARD = "CREDIT_CARD",
  DEBIT_CARD = "DEBIT_CARD",
  MONEY = "MONEY",
}

const paymentType = z.nativeEnum(PaymentMethod);

const checkoutFormSchema = z.object({
  cep: z.string().max(8).min(8),
  street: z.string(),
  number: z.string(),
  complement: z.string().optional(),
  district: z.string(),
  city: z.string(),
  state: z.string().max(2).min(2),
  paymentType,
});
export type CheckoutFormSchema = z.infer<typeof checkoutFormSchema>;

const CheckoutPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CheckoutFormSchema>({
    resolver: zodResolver(checkoutFormSchema),
  });

  const onSubmit = (data: CheckoutFormSchema) => {
    console.log(data);
  };

  console.log({
    errors,
  });

  return (
    <main className="w-full flex  w-full space-x-[32px]">
      <div className="flex flex-col flex-1 max-w-[640px] ">
        <AddressStep errors={errors} register={register} />
        <PaymentMethodStep register={register} />
      </div>
      <div className="flex flex-col flex-1 max-w-[448px]">
        <CheckoutCart onSubmit={handleSubmit(onSubmit)} />
      </div>
    </main>
  );
};

export default CheckoutPage;
