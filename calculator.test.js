import { calculator } from "./calculator.js";

test("Add two numbers", ()=> {
    expect(calculator.add(2, 1)).toBe(3);
});
test("Subtact two numbers", ()=> {
    expect(calculator.subtract(3, 1)).toBe(2);
});
test("Divide two numbers", ()=> {
    expect(calculator.divide(4, 2)).toBe(2);
});
test("Multiply two numbers", ()=> {
    expect(calculator.multiply(3, 3)).toBe(9);
});