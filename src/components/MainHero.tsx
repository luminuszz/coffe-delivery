import BannerImg from "@assets/banner-image.png";
import Benefit from "@components/Benefit";
import { Coffee, Icon, Package, ShoppingCart, Timer } from "phosphor-react";

type BenefitProps = {
  data: {
    icon: Icon;
    title: string;
    color: string;
  };
};

const benefits: BenefitProps["data"][] = [
  {
    title: "Compra simples e segura",
    icon: ShoppingCart,
    color: "#C47F17",
  },
  {
    title: "Embalagem mantém o café intacto",
    icon: Package,
    color: "#574F4D",
  },

  {
    title: "Entrega rápida e rastreada",
    icon: Timer,
    color: "#DBAC2C",
  },

  {
    title: "O café chega fresquinho até você",
    icon: Coffee,
    color: "#8047F8",
  },
];

const MainHero = () => (
  <main className="w-full flex-col  mt-[95px] p-4 pb-[108px] ">
    <div className="flex flex-1 justify-between">
      <div className="w-full max-w-[588px]">
        <h2 className="text-[48px] font-extrabold font-secondary text-base-title">
          Encontre o café perfeito para qualquer hora do dia
        </h2>

        <h4 className="mt-4 w-[90%] text-[20px] leading-[130%] text-base-subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver , a qualquer
          hora
        </h4>

        <div className="mt-[62px] grid gap-[20px] grid-cols-2 grid-rows-2 ">
          {benefits.map((benefit) => (
            <Benefit key={benefit.color} data={benefit} />
          ))}
        </div>
      </div>

      <div className=" max-w-[475px] max-h-[360px] ml-[56px]">
        <img className="w-full h-full" src={BannerImg} alt="banner" />
      </div>
    </div>
  </main>
);

export default MainHero;
