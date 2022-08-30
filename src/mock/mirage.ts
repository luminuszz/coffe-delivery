import { createServer, Model, Server } from "miragejs";
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

type AppRegistry = Registry<{ coffee: typeof CoffeeModel }, {}>;

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
    },

    routes() {
      this.namespace = "api";

      this.get("/coffees", (schema: AppSchema) => schema.all("coffee"));

      this.post("/coffees", (schema: AppSchema, request) => {
        const coffee = request.requestBody as unknown as Coffe;
        return schema.create("coffee", coffee);
      });

      this.passthrough("https://api.opencagedata.com/**");
    },
  });
}
