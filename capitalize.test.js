import { capitalize } from "./capitalize.js";

test('Capitalize the first letter', () => {
    expect(capitalize('helloworld')).toBe('Helloworld');
});
test('Works with capital letters', () => {
    expect(capitalize('HelLoWOrLd')).toBe('Helloworld');
});
