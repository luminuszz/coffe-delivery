import LogoImg from "@assets/logo.svg";
import { cartQuantityState } from "@store/cartStore";
import { userAddressState, userState } from "@store/userStore";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useEffect, Suspense } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";

const ClientLocationIndicator = ({
  locationName,
}: {
  locationName: string;
}) => (
  <div className="flex justify-between items-end  w-full  p-[10px] bg-purple-light h-[38px] rounded-[6px] ">
    <span className="font-primary text-purple-dark text-[15px]  leading-[130%] mr-1">
      {locationName}
    </span>
    <MapPin weight="fill" color="#4B2995" width="22px" height="22px" />
  </div>
);

const CartButton = () => {
  const totalOfProducts = useRecoilValue(cartQuantityState);

  return (
    <button
      type="button"
      className="bg-yellow-light w-[33px]  p-[8px] rounded-[5px] outline-0 border-0 w-[38px] h-[38px] relative"
    >
      <ShoppingCart width="22px" height="22px" color="#C47F17" weight="fill" />

      {totalOfProducts > 0 && (
        <div className=" flex justify-center items-center w-[20px] h-[20px] rounded-full bg-yellow-dark absolute top-[-6px] right-0 left-6">
          <strong className="text-white text-[13px] text-center  font-extrabold">
            {totalOfProducts}
          </strong>
        </div>
      )}
    </button>
  );
};

const Header = () => {
  const [, setUserState] = useRecoilState(userState);

  const userAddress = useRecoilValueLoadable(userAddressState);

  useEffect(() => {
    if (!navigator?.geolocation) return;

    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      setUserState({
        location: {
          lng: coords.longitude,
          lat: coords.latitude,
        },
      });
    });
  }, [setUserState]);

  const locationName =
    userAddress.state === "hasValue" ? userAddress.contents : "Carregando...";

  return (
    <header className="flex py-[32px] justify-between items-center px-4">
      <img src={LogoImg} alt="logo " />

      <aside className="space-x-2 flex ">
        <Suspense fallback="Carregando">
          <ClientLocationIndicator locationName={locationName} />
        </Suspense>

        <CartButton />
      </aside>
    </header>
  );
};

export default Header;
