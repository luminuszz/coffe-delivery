import LogoImg from "@assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

const ClientLocationIndicator = () => (
  <div className="flex justify-between items-end  w-full max-w-[143px] p-[10px] bg-purple-light h-[38px] rounded-[6px] ">
    <span className="font-primary text-purple-dark text-[15px]  leading-[130%] mr-1">
      Salvador, BA
    </span>
    <MapPin weight="fill" color="#4B2995" width="22px" height="22px" />
  </div>
);

const CartButton = () => (
  <button
    type="button"
    className="bg-yellow-light w-[33px]  p-[8px] rounded-[5px] outline-0 border-0 w-[38px] h-[38px]"
  >
    <ShoppingCart width="22px" height="22px" color="#C47F17" weight="fill" />
  </button>
);

const Header = () => (
  <header className="flex py-[32px] justify-between items-center">
    <img src={LogoImg} alt="logo " />

    <aside className="space-x-2 flex ">
      <ClientLocationIndicator />

      <CartButton />
    </aside>
  </header>
);

export default Header;
