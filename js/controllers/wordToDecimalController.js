import { wordToDecimal } from '../models/wordToDecimalModel.js';
import { updateDecimalResult } from '../view/converterView.js';

export const handleWordToDecimal = (word) => {
    try {
        const decimalResult = wordToDecimal(word);
        updateDecimalResult(decimalResult);
        return decimalResult;
    } catch (error) {
        updateBinaryResult("Error: " + error.message);
        throw error;
    }
}
