import { createServer, Model, Server, JSONAPISerializer } from "miragejs";
import { Registry } from "miragejs/-types";
import Schema from "miragejs/orm/schema";

import coffeesMock, { Coffe } from "./coffees.mock";

const CoffeeModel = Model.extend<Coffe>({
  id: "",
  title: "",
  chips: [],
  description: "",
  image: "",
  price: 0,
});

const CartModel = Model.extend({
  products: [""],
  id: "",
  user_id: "",
});

type AppRegistry = Registry<
  { coffee: typeof CoffeeModel; cart: typeof CartModel },
  {}
>;

type AppSchema = Schema<AppRegistry>;

export default function makeServer(): Server {
  return createServer({
    logging: true,
    seeds(server) {
      server.db.loadData({
        coffees: coffeesMock,
      });
    },
    models: {
      coffee: CoffeeModel,
      cart: CartModel,
    },

    routes() {
      this.namespace = "api";

      this.get("/coffees", (schema: AppSchema) => schema.all("coffee"));

      this.post("/coffees", (schema: AppSchema, request) => {
        const coffee = request.requestBody as unknown as Coffe;
        return schema.create("coffee", coffee);
      });

      this.post("/cart", (schema: AppSchema, req) => {
        const { user_id, products } = JSON.parse(
          req.requestBody
        ) as unknown as {
          user_id: string;
          products: string[];
        };

        const cart = schema.create("cart", { user_id, products });

        return cart.id;
      });

      this.get("/cart/:user_id", (schema: AppSchema, req) =>
        schema.findBy("cart", { user_id: req.params.user_id })
      );

      this.passthrough("https://api.opencagedata.com/**");
    },
  });
}
