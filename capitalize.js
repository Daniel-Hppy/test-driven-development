export function capitalize(string) {
    const firstLetter = string.slice(0,1).toUpperCase();
    const remainingLetter = string.slice(1).toLowerCase();

    return firstLetter.concat(remainingLetter);
}