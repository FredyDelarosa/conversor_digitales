export const numberWordsToDecimal = {
    "cero": 0,
    "uno": 1,
    "dos": 2,
    "tres": 3,
    "cuatro": 4,
    "cinco": 5,
    "seis": 6,
    "siete": 7,
    "ocho": 8,
    "nueve": 9,
    "diez": 10,
    "once": 11,
    "doce": 12,
    "trece": 13,
    "catorce": 14,
    "quince": 15,
    "dieciseis": 16,
    "diecisiete": 17,
    "dieciocho": 18,
    "diecinueve": 19,
    "veinte": 20,
}

export const wordToDecimal = (word) => {
    const normalizedWord = word.toLowerCase().trim();
    if (numberWordsToDecimal.hasOwnProperty(normalizedWord)) {
        return numberWordsToDecimal[normalizedWord];
    } else {
        throw new Error('La palabra "${word}" no es un número válido');
    }
}