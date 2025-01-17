import { decimalToHexadecimal } from '../models/decimalToHexadecimalModel.js';
import { updateHexadecimalResult } from '../view/converterView.js';

export const handleDecimalToHexadecimal = (decimal) => {
    const hexadecimalResult = decimalToHexadecimal(decimal);
    updateHexadecimalResult(hexadecimalResult);
}
