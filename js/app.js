import { handleWordToDecimal } from './controllers/wordToDecimalController.js';
import { handleDecimalToBinary } from './controllers/decimalToBinaryController.js';
import { handleDecimalToHexadecimal } from './controllers/decimalToHexadecimalController.js';
import { handleDecimalToOctal } from './controllers/decimalToOctalController.js';
import { handleWordToAscii } from './controllers/decimalToAsciiController.js';
//import { handleDecimalToAscii } from './controllers/decimalToAsciiController.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('conversion-form');
    const inputField = document.getElementById('inputValue');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const inputWord = inputField.value.trim();

        try {
            const decimalValue = handleWordToDecimal(inputWord);
            handleDecimalToBinary(decimalValue);
            handleDecimalToHexadecimal(decimalValue);
            handleDecimalToOctal(decimalValue);
            handleWordToAscii(inputWord);
        } catch (error) {
            console.error(error.message);
        }
    });
});

