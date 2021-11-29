import Counter from "@/components/Counter";
import { shallowMount, mount } from "@vue/test-utils";

describe("Counter Component", () => {
  /* test("Debe hacer match con el snapshot", () => {
    const wrapper = shallowMount(Counter);
    expect(wrapper.html()).toMatchSnapshot();
  }); */
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Counter);
  });
  test("Título debería tener valor por defecto: 'Default title'", () => {
    /* expect(wrapper.find("h10").exists()).toBe(false);
    expect(wrapper.find("h10").exists()).toBeFalsy(); */
    const title = wrapper.find(".counter-title");

    expect(title.text()).toBe("Default title"); //Error: le faltan dos puntos ":"
    //expect(title.text()).toBe("Default title:");
  });
  test("Segundo <p> debería tener valor por defecto de 5", () => {
    /* const pTags = wrapper.findAll("p");
    expect(pTags[1].text()).toBe("5"); */
    const value = wrapper.find('[data-testId="counter"]');
    expect(value.text()).toBe("5");
  });
  test("Debe incrementar y decrementar el contador", async () => {
    const [incrementButton, decrementButton] = wrapper.findAll("button");

    await incrementButton.trigger("click");
    await decrementButton.trigger("click");
    await decrementButton.trigger("click");

    const value = wrapper.find('[data-testId="counter"]');
    expect(value.text()).toBe("4");
  });
  test("Debe establecer el valor por defecto", () => {
    const { start } = wrapper.props();
    expect(start).toBe(5);
    expect(typeof start).toBe("number");

    const value = wrapper.find('[data-testId="counter"]');
    expect(Number(value.text())).toBe(start);
  });

  test("Debe pasar la prop de titulo", () => {
    const titleStr = "Test title";
    const wrapper = shallowMount(Counter, {
      props: {
        title: titleStr,
        start: 5,
      },
    });

    const title = wrapper.find(".counter-title").text();
    expect(title).toEqual(titleStr);

    const value = wrapper.find('[data-testId="counter"]');
    expect(Number(value.text())).toBe(5);
  });
});
