import CoffeeImage from "@assets/coffe.png";
import CoffeeCard from "@components/CoffeeCard";
import Container from "@components/Container";
import Header from "@components/Header";
import MainHero from "@components/MainHero";
import { Minus, Plus } from "phosphor-react";

const App = () => (
  <Container>
    <Header />
    <MainHero />

    <aside className="w-full mt-6 ">
      <h4 className="font-extrabold text-[32px] leading-[130%] text-base-subtitle mb-Bebida feita com chocolate dissolvido no leite quente e café10 ">
        Nossos cafés
      </h4>

      <div className="grid grid-rows-4 grid-cols-4 gap-[32px] mt-[54px]">
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
        <CoffeeCard
          coffee={{
            image: CoffeeImage,
            chips: ["Expresso", "Com leite"],
            title: "Chocolate Quente",
            price: 10,
            subtitle:
              "Bebida feita com chocolate dissolvido no leite quente e café",
          }}
        />
      </div>
    </aside>
  </Container>
);

export default App;
