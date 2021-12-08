import { mount, shallowMount } from "@vue/test-utils";
import PokemonPage from "@/pages/PokemonPage";
import { pokemons } from "../components/Pokemon/pokemons.mock";

describe("PokemonPage Component", () => {
  let wrapper;
  let pokemonMixSpy;

  beforeEach(() => {
    pokemonMixSpy = jest.spyOn(PokemonPage.methods, "pokemonMix");
    wrapper = shallowMount(PokemonPage);
  });

  test("Debe corresponder con el snapshot", () => {
    //console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe llamar función pokemonMix al hacer el Mount", () => {
    //El mount ocurre con el shallowMount por lo que llama al espía después de haber invocado a la función,
    //así que no ocurrirá nada después de haber creado el espía,
    //por lo que es necesario hacerlo antes de que se haga el Mount en el beforeEach
    //const pokemonMixSpy = jest.spyOn(PokemonPage.methods, "pokemonMix");
    expect(pokemonMixSpy).toHaveBeenCalled();
  });

  test("Debe corresponder el snapshot cuando carga la data correcta", () => {
    let wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: [...pokemons],
          pokemon: { name: "cyndaquil", id: 155 },
          show: false,
          showAnswer: false,
        };
      },
    });
    //console.log(wrapper.html());
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("Debe mostrar los componentes PokemonPicture y PokemonOptions", () => {
    let wrapper = shallowMount(PokemonPage, {
      data() {
        return {
          pokemonsArr: [...pokemons],
          pokemon: { name: "cyndaquil", id: 155 },
          show: false,
          showAnswer: false,
        };
      },
    });
    const PokemonPicture = wrapper.find("pokemon-picture-stub");
    const PokemonOptions = wrapper.find("pokemon-options-stub");
    //console.log(PokemonPicture.html());
    //console.log(PokemonOptions.html());
    expect(PokemonPicture.exists()).toBeTruthy();
    expect(PokemonOptions.exists()).toBeTruthy();

    //console.log(PokemonPicture.attributes());
    expect(PokemonPicture.attributes("pokeid")).toBe("155");
    expect(PokemonOptions.attributes("pokemons")).toBeTruthy();
    /* Con mount, los attributes como pokeid o show no se van a mostrar, solo los
    típicos como las classes o id, se pueden extraer si se utiliza el shallowMount, 
    y se usan los componentes con sus etiquetas con el sufijo stub que aparece en el 
    snapshot */
  });

  test("Debe desencadenar distintas reacciones al llamar la función checkAnswer", async () => {
    let wrapper = mount(PokemonPage, {
      data() {
        return {
          pokemonsArr: [...pokemons],
          pokemon: { name: "cyndaquil", id: 155 },
          show: false,
          showAnswer: false,
        };
      },
    });

    const PokemonPicture = wrapper.find(".pokemon-picture-container");
    const PokemonOptions = wrapper.find(".pokemon-options-container");

    await wrapper.vm.checkAnswer();

    /* //shallowMount
    expect(PokemonPicture.attributes("show")).toBe("true");
    expect(PokemonOptions.attributes("show")).toBe("true"); */

    const resultImage = PokemonPicture.find("#result");
    const message = PokemonOptions.find(".message");
    //console.log(resultImage.html(), message.text());
    expect(resultImage.exists()).toBeTruthy();
    expect(message.text()).toBe("Es cyndaquil !");

    const correctAnswer = wrapper.findAll("li")[1];
    expect(correctAnswer.attributes("class").includes("correct")).toBeTruthy();

    //console.log(wrapper.findAll("li")[1].html());
  });
});
