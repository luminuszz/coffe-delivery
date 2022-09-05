export const endpoint = "/api/cart";

export const getUserCart = async (user_id: string) => {
  const response = await fetch(`${endpoint}/${user_id}`);

  return response.json();
};

export const createCart = async (
  user_id: string,
  products: string[]
): Promise<string> => {
  const data = JSON.stringify({
    user_id,
    products,
  });

  const cartId = await fetch(endpoint, {
    method: "POST",
    body: data,
  });

  return (await cartId.json()) as string;
};
