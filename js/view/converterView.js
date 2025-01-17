export const updateDecimalResult = (result) => {
    const decimalResultElement = document.getElementById('decimalResult');
    decimalResultElement.textContent = `Decimal: ${result}`;
};

export const updateBinaryResult = (result) => {
    const binaryResultElement = document.getElementById('binaryResult');
    binaryResultElement.textContent = `Binario: ${result}`;
};

export const updateHexadecimalResult = (result) => {
    const hexadecimalResultElement = document.getElementById('hexadecimalResult');
    hexadecimalResultElement.textContent = `Hexadecimal: ${result}`;
};

export const updateOctalResult = (result) => {
    const octalResultElement = document.getElementById('octalResult');
    octalResultElement.textContent = `Octal: ${result}`;
};

export const updateAsciiResult = (result) => {
    const asciiWordResultElement = document.getElementById('asciiWordResult');
    const asciiString = Array.isArray(result) ? result.join(', ') : result;
    asciiWordResultElement.textContent = `ASCII: ${asciiString}`;
};
