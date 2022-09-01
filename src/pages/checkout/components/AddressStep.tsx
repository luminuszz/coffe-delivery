import { zodResolver } from "@hookform/resolvers/zod";
import { MapPinLine } from "phosphor-react";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  LegacyRef,
  ReactNode,
} from "react";
import { Ref, useForm } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types/errors";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { z } from "zod";

import { CheckoutFormSchema } from "../checkout.page";

const AddressInformation = () => (
  <header className="flex flex-row space-x-2">
    <MapPinLine color="#C47F17" width="22px" height="22px" />

    <div className=" flex flex-col items-start justify-start">
      <h3 className="font-normal text-[16px] leading-[130%] text-base-subtitle">
        Endereço de entrega
      </h3>
      <h4 className="font-normal text-[16px] text-base-text">
        Informe o endereço onde deseja receber seu pedido
      </h4>
    </div>
  </header>
);

type ControlProps = {
  width: string | number;
  children: ReactNode;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width: Partial<ControlProps["width"]>;
  error?: string;
};

const Control = ({ width, children }: ControlProps) => (
  <div className="w-full" style={{ maxWidth: width }}>
    {children}
  </div>
);

const InputComponent = (
  { width, error, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement>
) => (
  <Control width={width || "100%"}>
    <input
      className="
      w-full
      h-[42px]
      p-[12px]
      focus:border-yellow-dark
      focus:outline-yellow-dark
      bg-base-input
      border-1
      border-base-button
      rounded-[4px]
        "
      {...props}
      ref={ref}
    />
    {error && <span className="text-red-400 text-[15px] mt-2">{error}</span>}
  </Control>
);

const Input = forwardRef(InputComponent);

type Props = {
  register: UseFormRegister<CheckoutFormSchema>;
  errors: FieldErrors<CheckoutFormSchema>;
};

const AddressStep = ({ register, errors }: Props) => (
  <>
    <h1 className="font-bold text-[18px] text-base-subtitle leading-[130%]">
      Complete seu pedido
    </h1>

    <div className="max-w-[640px] w-full mt-[15px]">
      <div className="p-[40px] w-full bg-base-card flex flex-col  rounded-[6px]">
        <AddressInformation />

        <div className="flex flex-col justify-center items-start mt-[32px]  space-y-[16px]">
          <Input
            placeholder="CEP *"
            width="200px"
            {...register("cep")}
            error={errors.cep?.message}
          />

          <Input
            width="full"
            placeholder="Rua *"
            {...register("street")}
            error={errors.street?.message}
          />

          <div className="space-x-[12px] flex flex-row w-full">
            <Input
              width="200px"
              placeholder="Número *"
              {...register("number")}
              error={errors.number?.message}
            />
            <Input
              width="full"
              placeholder="Complemento"
              {...register("complement")}
              error={errors.complement?.message}
            />
          </div>

          <div className="space-x-[12px] flex flex-row w-full flex-1">
            <Input
              width="200px"
              placeholder="Bairro *"
              {...register("district")}
              error={errors.district?.message}
            />
            <Input
              width="full"
              placeholder="Cidade *"
              {...register("city")}
              error={errors.city?.message}
            />
            <Input
              width="60px"
              placeholder="UF * "
              {...register("state")}
              error={errors.state?.message}
            />
          </div>
        </div>
      </div>
    </div>
  </>
);
export default AddressStep;
