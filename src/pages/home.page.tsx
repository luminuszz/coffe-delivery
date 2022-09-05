import CoffeeCard from "@components/CoffeeCard";
import Container from "@components/Container";
import MainHero from "@components/MainHero";

import { useFetchApi } from "../hooks/useFetchApi";
import { Coffe } from "../mock/coffees.mock";
import { fetchCoffees } from "../services/fetchCoffees";

const HomePage = () => {
  const { data: products } = useFetchApi<Coffe[]>(fetchCoffees, "api/coffees");

  return (
    <Container>
      <MainHero />

      <aside className="w-full mt-6 ">
        <h4 className="font-extrabold text-[32px] leading-[130%] text-base-subtitle mb-Bebida feita com chocolate dissolvido no leite quente e café10 ">
          Nossos cafés Produtos
        </h4>

        <div className="grid grid-rows-4 grid-cols-4 gap-[32px] mt-[54px]">
          {products?.map((product) => (
            <CoffeeCard
              key={product.id}
              coffee={{ ...product, subtitle: product.description }}
            />
          ))}
        </div>
      </aside>
    </Container>
  );
};

export default HomePage;
