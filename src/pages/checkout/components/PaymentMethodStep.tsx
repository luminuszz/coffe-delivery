import { CurrencyDollar, CreditCard, Icon, Bank, Money } from "phosphor-react";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import { UseFormRegister } from "react-hook-form/dist/types/form";

import { CheckoutFormSchema, PaymentMethod } from "../checkout.page";

type PaymentTypeOptionProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  currentIcon: Icon;
};

const PaymentTypeOptionComponent = (
  { id, currentIcon: CurrentIcon, label, ...props }: PaymentTypeOptionProps,
  ref: LegacyRef<HTMLInputElement>
) => (
  <div className="w-full">
    <input
      hidden
      className="peer"
      type="radio"
      id={id}
      ref={ref}
      value={id}
      {...props}
    />
    <label
      htmlFor={id}
      className="
    flex
    flex-row
    items-center
    justify-start
    cursor-pointer
    w-full max-w-[178px] h-[51px]
    bg-base-button-add
    rounded-[5px]
    p-[16px]
    uppercase text-[#574F4D] text-[12px] leading-[160%]
    hover:bg-purple-light
    hover:duration-500
    peer-checked:border-purple-dark
    peer-checked:border-[1px]
    flex-wrap
    "
    >
      <CurrentIcon
        width="16px"
        height="16px"
        color="#8047F8"
        className="mr-[12px]"
      />
      {label}
    </label>
  </div>
);

const PaymentTypeOption = forwardRef(PaymentTypeOptionComponent);

const PaymentInformation = () => (
  <header className="flex flex-row space-x-2">
    <CurrencyDollar color="#8047F8" width="22px" height="22px" />

    <div className="flex-nowrap flex flex-col items-start justify-start">
      <h3 className="font-normal text-[16px] leading-[130%] text-base-subtitle">
        Pagamento
      </h3>
      <h4 className="font-normal text-[16px] text-base-text">
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </h4>
    </div>
  </header>
);

type Props = {
  register: UseFormRegister<CheckoutFormSchema>;
};

const PaymentMethodStep = ({ register }: Props) => (
  <div className="max-w-[640px] w-full   mt-[15px]">
    <div className="p-[40px] w-full bg-base-card flex flex-col  rounded-[6px]">
      <PaymentInformation />

      <div className="mt-[32px] flex flex-row space-x-[10px]">
        <PaymentTypeOption
          currentIcon={CreditCard}
          label="Cartão de credito"
          id={PaymentMethod.CREDIT_CARD}
          {...register("paymentType")}
        />
        <PaymentTypeOption
          id={PaymentMethod.DEBIT_CARD}
          currentIcon={Bank}
          label="Cartão de debito"
          value={PaymentMethod.DEBIT_CARD}
          {...register("paymentType")}
        />
        <PaymentTypeOption
          id={PaymentMethod.MONEY}
          currentIcon={Money}
          label="Dinheiro"
          {...register("paymentType")}
        />
      </div>
    </div>
  </div>
);

export default PaymentMethodStep;
