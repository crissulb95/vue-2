import { pokemonApi } from "@/api/pokemon";

describe("Pokemon Api Index", () => {
  test("Axios debe estar configurado correctamente con el url de la API de pokemon", () => {
    //console.log("test: ", pokemonApi.defaults.baseURL);
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
