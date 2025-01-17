//import { decimalToAscii } from "../models/decimalToAsciiModel.js"
import { updateAsciiResult } from "../view/converterView.js"
import { wordToAscii } from "../models/wordToAsciiModel.js"

/*export const handleDecimalToAscii = (decimal) => {
    try {
        const asciiResult = decimalToAscii(decimal);
        updateAsciiResult(asciiResult);
    } catch (error) {
        updateAsciiResult('Error: ${error.message}' );
    }
}*/

export const handleWordToAscii = (word) => {
    try {
        const asciiResult = wordToAscii(word); 
        updateAsciiResult(asciiResult);
    } catch (error) {
        updateAsciiResult(['Error: No se pudo convertir a ASCII']);
    }
};
