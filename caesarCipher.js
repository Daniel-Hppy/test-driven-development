export function caesarCipher(string, num) {
    const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    return string
        .split('')
        .map(char => {
            if (lowerAlphabet.includes(char)) {
                let oldIndex = lowerAlphabet.indexOf(char);
                let newIndex = oldIndex + num;
                
                while (newIndex >= lowerAlphabet.length) {
                    newIndex = newIndex - lowerAlphabet.length;
                }
                while (newIndex < 0) {
                    newIndex = newIndex + lowerAlphabet.length;
                }
                
                return lowerAlphabet[newIndex];
            }
            else if (upperAlphabet.includes(char)) {
                let oldIndex = upperAlphabet.indexOf(char);
                let newIndex = oldIndex + num;
                
                while (newIndex >= upperAlphabet.length) {
                    newIndex = newIndex - upperAlphabet.length;
                }
                while (newIndex < 0) {
                    newIndex = newIndex + upperAlphabet.length;
                }
                
                return upperAlphabet[newIndex];
            }
            else {
                return char;
            }
        })
        .join('');
}