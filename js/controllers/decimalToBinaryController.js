import { decimalToBinary } from '../models/decimalToBinaryModel.js';
import { updateBinaryResult } from '../view/converterView.js';

export const handleDecimalToBinary = (decimal) => {
    const binaryResult = decimalToBinary(decimal);
    updateBinaryResult(binaryResult);
};
