import { pokemonApi } from '../../api/pokemon'

export const getPokemon = () => Array.from(Array(649)).map((_, i) => i + 1)

export const getNames = async ([a, b, c, d] = []) => {
  /* const x = await pokemonApi.get(`/${a}`);
  console.log(x.data.name, a, b, c, d); */
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`)
  ]
  const [p1, p2, p3, p4] = await Promise.all(promiseArr)
  return [
    { name: p1.data.name, id: p1.data.id },
    { name: p2.data.name, id: p2.data.id },
    { name: p3.data.name, id: p3.data.id },
    { name: p4.data.name, id: p4.data.id }
  ]
}

export const getPokemonOptions = async () => {
  const auxArr = getPokemon().sort(() => Math.random() - 0.5)
  const names = await getNames(auxArr.splice(0, 4))
  return names
}
