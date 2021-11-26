describe("Example Component", () => {
  test("Debe ser mayor a 10", () => {
    //AAA: Arreglar
    let value = 5;
    //Estímulo
    value += 12;
    //Observar el resultado
    expect(value).toBeGreaterThan(10);
  });
});
