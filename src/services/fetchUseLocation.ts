type Coords = {
  lat: number;
  lng: number;
};

export const makeUrl = (lat: number, lng: number) =>
  `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=70ba98c307434d2eb44585cdad0698c7`;

export default async function fetchUserLocation({ lat, lng }: Coords) {
  try {
    const response = await fetch(makeUrl(lat, lng));

    const parsedResponse = await response.json();

    return {
      city: parsedResponse.results[0].components.city,
      stateCode: parsedResponse.results[0].components.state_code,
    };
  } catch (e) {
    const error = e as any;

    throw new Error(error?.message as string);
  }
}
