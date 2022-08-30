import LogoImg from "@assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useEffect, useState } from "react";

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

const CartButton = () => (
  <button
    type="button"
    className="bg-yellow-light w-[33px]  p-[8px] rounded-[5px] outline-0 border-0 w-[38px] h-[38px]"
  >
    <ShoppingCart width="22px" height="22px" color="#C47F17" weight="fill" />
  </button>
);

const Header = () => {
  const [userLocation, setUserLocation] = useState<string>("São Paulo, SP");

  useEffect(() => {
    if (!navigator?.geolocation) return;

    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const { latitude, longitude } = coords;
      fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=70ba98c307434d2eb44585cdad0698c7`
      )
        .then((res) => res.json())
        .then((data) => {
          const location = data?.results[0]?.components;

          const place = `${location.city}, ${location.state_code}`;

          setUserLocation(place);
        })
        .catch((err) => console.log({ err }));
    });
  }, []);

  return (
    <header className="flex py-[32px] justify-between items-center px-4">
      <img src={LogoImg} alt="logo " />

      <aside className="space-x-2 flex ">
        <ClientLocationIndicator locationName={userLocation} />

        <CartButton />
      </aside>
    </header>
  );
};

export default Header;
