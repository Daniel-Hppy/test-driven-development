import { caesarCipher } from "./caesarCipher.js";

test('if it shifts the letters into cyher', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});
test('if it shift lettercase', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});
test('if puntuation works', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});