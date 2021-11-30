import Indecision from "@/components/Indecision";
import { shallowMount } from "@vue/test-utils";

describe("Indecision Component", () => {
  let wrapper;
  let clgSpy;

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          answer: "yes",
          forced: false,
          image: "https://yesno.wtf/assets/yes/2.gif",
        }),
    })
  );

  beforeEach(() => {
    wrapper = shallowMount(Indecision);
    clgSpy = jest.spyOn(console, "log");
    jest.clearAllMocks();
  });

  test("Debería corresponder con el snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("No debe llamar a la función getAnswer", async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("[data-test-id='input-question']");

    await input.setValue("Test text");

    expect(clgSpy).toHaveBeenCalled();
    expect(getAnswerSpy).not.toHaveBeenCalled();
    //expect(clgSpy).toHaveBeenCalledTimes(1);
  });
  test('Al escribir "?" debe disparar el llamado a la función getAnswer', async () => {
    const getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer");
    const input = wrapper.find("[data-test-id='input-question']");

    await input.setValue("Test text2?");

    expect(clgSpy).toHaveBeenCalledTimes(2);
    expect(getAnswerSpy).toHaveBeenCalledTimes(1);
  });
  test("Pruebas en getAnswer()", async () => {
    await wrapper.vm.getAnswer();

    const gif = wrapper.find(".img-container img");
    //console.log(gif.exists());
    expect(gif.exists()).toBeTruthy();

    console.log("answer: ", wrapper.vm.answer);
    console.log("Background GIF: ", wrapper.vm.bgGif);
    expect(wrapper.vm.answer).toBe("Si");
    expect(wrapper.vm.bgGif).toBe("https://yesno.wtf/assets/yes/2.gif");
  });
  test("Pruebas en getAnswer() deben fallar", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is unavailable"));
    await wrapper.vm.getAnswer();

    const gif = wrapper.find(".img-container img");
    expect(gif.exists()).toBeFalsy();
    expect(wrapper.vm.answer).toBe("Hubo un error en la carga desde el API");
  });
});
