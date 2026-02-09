import { reverseString } from "./reverseString";

test("Reverse String", () => {
    expect(reverseString("somestring")).toBe("gnirtsemos");
});
test("Works with words with capital", () => {
    expect(reverseString("HelloWorld")).toBe("dlroWolleH");
});