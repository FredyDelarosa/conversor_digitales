import { decimalToOctal } from '../models/decimalToOctalModel.js'
import { updateOctalResult } from '../view/converterView.js'

export const handleDecimalToOctal = (decimal) => {
    const octalResult = decimalToOctal(decimal)
    updateOctalResult(octalResult)
}
