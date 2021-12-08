import { shallowMount } from "@vue/test-utils";
import { PokemonOptions } from "@/components/Pokemon";
import { pokemons } from "./pokemons.mock";

describe("PokemonOptions component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        /* pokemons:  [
          { name: expect.any(String), id: expect.any(Number) },
          { name: expect.any(String), id: expect.any(Number) },
          { name: expect.any(String), id: expect.any(Number) },
          { name: expect.any(String), id: expect.any(Number) },
        ] */ pokemons,
        correctPokemon: { name: expect.any(String), id: expect.any(Number) },
        show: false,
      },
    });
  });
  test("Debería corresponder con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
    /* expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="pokemon-options-container">
        <div class="message">
          <!--v-if-->
        </div>
        <ul>
          <li class="fade-in" id="option-1"><span>gyarados</span></li>
          <li class="fade-in" id="option-2"><span>cyndaquil</span></li>
          <li class="fade-in" id="option-3"><span>meloetta-aria</span></li>
          <li class="fade-in" id="option-4"><span>spinarak</span></li>
        </ul><button>Volver a jugar !</button>
      </div>
    `); */
  });

  test("Debe mostrar 4 opciones", () => {
    const liTags = wrapper.findAll("li");
    expect(liTags).toHaveLength(4);
    expect(liTags[0].attributes("id")).toBe("option-1");
    expect(liTags[1].find("span").text()).toBe("cyndaquil");
  });
  test("Debe emitir evento 'selection'", () => {
    const liTags = wrapper.findAll("li");
    liTags[0].trigger("click");
    //console.log("AQUI: ", wrapper.emitted("selection"));
    expect(wrapper.emitted("selection").length).toBe(1);
    expect(wrapper.emitted("selection")[0]).toEqual([130]);
  });
});
