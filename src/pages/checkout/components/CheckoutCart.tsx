import CoffeImage from "@assets/coffe.png";
import ControlQuantity from "@components/ControlQuantity";
import { cartTotalPriceState } from "@store/cartStore";
import { Trash } from "phosphor-react";
import { useRecoilValueLoadable } from "recoil";

const CartItem = () => (
  <div className="flex w-full flex-1 flex-row items-start space-x-[50px] min-w-368px border-b-[1px] border-b-[#E6E5E5] pb-[24px]">
    <div className=" space-x-[20px] flex flex-row ">
      <figure className="w-[64px] h-[64px] ">
        <img src={CoffeImage} alt="coffe cart" className="w-full h-full" />
      </figure>

      <div className="flex flex-col space-y-[8px]">
        <strong className="text-[16px] leading-[130%] font-normal text-base-subtitle">
          Expresso Tradicional
        </strong>

        <div className="flex flex-1 w-full flex-row space-x-[8px] justify-items-center">
          <ControlQuantity quantity={1} onAdd={() => {}} onRemove={() => {}} />
          <button
            type="button"
            className="
            rounded-[6px]
            bg-[#E6E5E5] py-[6px]
            px-[8px] flex items-center w-full
            max-w-[91px]  uppercase text-base-text text-[12px]
            hover:bg-base-hover
            hover:duration-500
            "
          >
            <Trash
              color="#8047F8"
              width="16px"
              height="16px"
              className="mr-[4px]"
            />
            Remover
          </button>
        </div>
      </div>
    </div>

    <strong className="text-[16px] leading-[130%] font-extrabold text-base-text">
      R$ 9,90
    </strong>
  </div>
);

type CheckoutValueTableItemProps = {
  label: string;
  value: string;
};

const CheckoutValueTableItem = ({
  value,
  label,
}: CheckoutValueTableItemProps) => (
  <div className="flex justify-between items-start flex-1 w-full">
    <span className="text-[14px] text-base-text text-left">{label}</span>
    <strong className="text-[16px] leading-[130%] font-normal text-base-text">
      {value}
    </strong>
  </div>
);

type Props = {
  onSubmit: () => void;
};

const CheckoutCart = ({ onSubmit }: Props) => {
  const totalPrice = useRecoilValueLoadable(cartTotalPriceState);

  return (
    <>
      <h1 className="font-bold text-[18px] text-base-subtitle leading-[130%]">
        Cafés selecionados
      </h1>
      <article
        className=" w-full mt-[15px] max-w-448px
         bg-base-card
        rounded-[6px]
        rounded-tr-[44px]
        rounded-bl-[44px]"
      >
        <div
          className=" p-[40px] w-full space-y-[24px]

      "
        >
          <CartItem />
          <CartItem />

          <footer className="flex flex-col items-center space-y-[12px] ">
            <CheckoutValueTableItem label="Total de itens" value="R$ 29,75" />
            <CheckoutValueTableItem label="Entrega" value="R$ 3,50" />

            <div className="flex justify-between items-start flex-1 w-full">
              <strong className="text-[20px] text-base-subtitle text-left">
                Total
              </strong>
              <strong className="text-[20px] leading-[130%] font-extrabold text-base-subtitle">
                R$ 32,25
              </strong>
            </div>

            <button
              onClick={onSubmit}
              type="submit"
              className="
            mt-[12px]
            w-full h-[46px] bg-yellow text-white font-bold rounded-[6px] uppercase
            text-center
            hover:bg-yellow-dark
            hover:duration-500
            "
            >
              confirmar pedido
            </button>
          </footer>
        </div>
      </article>
    </>
  );
};

export default CheckoutCart;
