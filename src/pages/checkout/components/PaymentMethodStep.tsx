import { CurrencyDollar, CreditCard, Icon, Bank, Money } from "phosphor-react";

type PaymentTypeOptionProps = {
  label: string;
  name: string;
  currentIcon: Icon;
};

const PaymentTypeOption = ({
  name,
  label,
  currentIcon: CurrentIcon,
}: PaymentTypeOptionProps) => (
  <div className="w-full">
    <input hidden className="peer" type="radio" id={name} name="paymentType" />
    <label
      htmlFor={name}
      className="
    flex items-center
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

const PaymentInformation = () => (
  <header className="flex flex-row space-x-2">
    <CurrencyDollar color="#8047F8" width="22px" height="22px" />

    <div className=" flex flex-col items-start justify-start">
      <h3 className="font-normal text-[16px] leading-[130%] text-base-subtitle">
        Pagamento
      </h3>
      <h4 className="font-normal text-[16px] text-base-text">
        O pagamento é feito na entrega. Escolha a forma que deseja pagar
      </h4>
    </div>
  </header>
);

const PaymentMethodStep = () => (
  <div className="max-w-[640px] w-full   mt-[15px]">
    <div className="p-[40px] w-full bg-base-card flex flex-col  rounded-[6px]">
      <PaymentInformation />

      <div className="mt-[32px] flex flex-row space-x-[12px]">
        <PaymentTypeOption
          currentIcon={CreditCard}
          name="creditCard"
          label="Cartão de credito"
        />
        <PaymentTypeOption
          currentIcon={Bank}
          name="debitCard"
          label="Cartão de debito"
        />
        <PaymentTypeOption currentIcon={Money} name="money" label="Dinheiro" />
      </div>
    </div>
  </div>
);

export default PaymentMethodStep;
