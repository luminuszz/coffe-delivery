import { Coffe } from "../mock/coffees.mock";

export const apiEndpoint = "/api/coffees";

export async function fetchCoffees() {
  const response = await fetch(apiEndpoint);

  const data = await response.json();

  return data.coffees as Coffe[];
}
