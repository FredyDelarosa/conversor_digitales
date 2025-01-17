/*export const decimalToAscii = (decimal) => {
    if (decimal >= 0 && decimal <= 127) {
        return String.fromCharCode(decimal);
    } else {
        throw new Error('The number must be between 0 and 127');
    }
}*/

export const wordToAscii = (word) => {
    return word
        .split('')
        .map((char) => char.charCodeAt(0))
}
