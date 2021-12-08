import { shallowMount } from "@vue/test-utils";
import { PokemonPicture } from "@/components/Pokemon";

describe("PokemonPicture Component", () => {
  /* let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonPicture);
  }); */
  test("Debería corresponder con el snapshot", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokeId: 1,
        show: true,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test("Debería mostrar la imagen oculta del pokemon 100", () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokeId: 100,
        show: true,
      },
    });
    const [img1, img2] = wrapper.findAll("img");

    expect(img1.exists()).toBeTruthy();
    expect(img2.exists()).toBe(true);
    expect(img1.classes("hidden-pokemon")).toBe(true);
    expect(img2.classes("hidden-pokemon")).toBe(false);
    expect(img1.attributes("src")).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg"
    );
    console.log(img1.attributes("src"));
  });
});
