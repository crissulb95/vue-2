import {
  getNames,
  getPokemon,
  getPokemonOptions,
} from "@/helpers/pokemon/getPokemon";

describe("getPokemon Helper", () => {
  test("Debe regresar un arreglo de números", () => {
    //console.log("test", getNames(), getPokemon());

    expect(getPokemon()).toHaveLength(649);
    expect(typeof getPokemon()[0]).toBe("number");
    expect(getPokemon()[150]).toBe(151);
    expect(getPokemon()[648]).toBe(649);
    expect(getPokemon()).toBeInstanceOf(Array);
  });
  test("Debe retornar 4 pokemons", async () => {
    const pokemons = await getNames([130, 155, 648, 167]);
    expect(pokemons).toEqual([
      { name: "gyarados", id: 130 },
      { name: "cyndaquil", id: 155 },
      { name: "meloetta-aria", id: 648 },
      { name: "spinarak", id: 167 },
    ]);
    //console.log(pokemons);
  });

  test("Debe retornar 4 pokemons de manera aleatoria", async () => {
    const pokemons = await getPokemonOptions();
    expect(pokemons).toHaveLength(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
    //console.log(pokemons);
  });
});
