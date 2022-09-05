import ControlQuantity from "@components/ControlQuantity";
import { currentProductStateQuantity } from "@store/cartStore";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

const Chip = ({ name }: { name: string }) => (
  <span className="text-yellow-dark bg-yellow-light py-1 px-2  rounded-2xl font-bold font-primary text-[12px] uppercase">
    {name}
  </span>
);

const PurchaseButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/checkout`)}
      type="button"
      className="p-[8px] w-[38px] h-[38px] bg-purple-dark outline-0 border-0 rounded-[6px] hover:bg-purple duration-1000 "
    >
      <ShoppingCart weight="fill" width="22px" height="22px" color="white" />
    </button>
  );
};

type Props = {
  coffee: {
    id: string;
    title: string;
    subtitle: string;
    chips: string[];
    price: number;
    image: string;
  };
};

const CoffeeCard = ({ coffee }: Props) => {
  const [quantity, setQuantity] = useRecoilState(
    currentProductStateQuantity(coffee.id)
  );

  const handleAdd = () => setQuantity(quantity + 1);
  const handleRemove = () => setQuantity(quantity - 1);

  return (
    <article className="w-[256px] h-[310px] bg-base-card  px-[24px] mb-10 rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] flex flex-col justify-between pb-[20px]">
      <div className="flex flex-col space-y-2.5 items-center">
        <img
          src={`src/assets/coffees/${coffee.image}`}
          alt="coffee"
          className="w-[120px] h-[120px] mt-[-25px] "
        />
        <div className="flex flex-row flex-wrap justify-center space-x-1 space-y-1 items-end">
          {coffee.chips.map((chip) => (
            <Chip name={chip} />
          ))}
        </div>

        <strong className="font-bold text-[20px] leading-[130%] text-base-subtitle">
          {coffee.title}
        </strong>
        <span className="text-[14px] text-[#8D8686] text-center ">
          {coffee.subtitle}
        </span>
      </div>

      <div className="flex  space-x-[23px] justify-center items-end space-y-2  mt-[30px]">
        <span>
          <span className="text-[14px] mr-1">R$</span>
          <strong className="text-[22px] font-extrabold">{coffee.price}</strong>
        </span>

        <div className="flex space-x-1">
          <ControlQuantity
            quantity={quantity}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />

          <PurchaseButton />
        </div>
      </div>
    </article>
  );
};

export default CoffeeCard;
