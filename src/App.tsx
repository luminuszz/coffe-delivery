import CoffeeImage from "@assets/coffe.png";
import CoffeeCard from "@components/CoffeeCard";
import Container from "@components/Container";
import Header from "@components/Header";
import MainHero from "@components/MainHero";
import { useEffect, useState } from "react";

import { Coffe } from "./mock/coffees.mock";

const App = () => {
  const [coffees, setCoffees] = useState<Coffe[]>([]);

  useEffect(() => {
    fetch("/api/coffees")
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        const parsedData = data.coffees.map((coffee: Coffe) => ({
          ...coffee,
          subtitle: coffee.description,
        }));

        setCoffees(parsedData);
      });
  }, []);

  return (
    <Container>
      <Header />
      <MainHero />

      <aside className="w-full mt-6 ">
        <h4 className="font-extrabold text-[32px] leading-[130%] text-base-subtitle mb-Bebida feita com chocolate dissolvido no leite quente e café10 ">
          Nossos cafés
        </h4>

        <div className="grid grid-rows-4 grid-cols-4 gap-[32px] mt-[54px]">
          {coffees.map((coffee) => (
            <CoffeeCard coffee={{ ...coffee, subtitle: coffee.description }} />
          ))}
        </div>
      </aside>
    </Container>
  );
};

export default App;
