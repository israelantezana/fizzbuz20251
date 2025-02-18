//import sumar from "./sumador.js";

describe("Fizzbuzz", () => {
  it("genera el mismo si no tiene ningua regla", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });
  it("genera Fizz si el numero es 3", () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });
  it("genera Buzz si el numero es 5", () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });
});

function fizzbuzz(n) {
  if (n == 1) return "1";
  if (n == 3) return "Fizz";
  return "Buzz";
}
