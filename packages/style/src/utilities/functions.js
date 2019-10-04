
/**
 * Parse a given hexcode string into an rgba statement with the given opacity
 * @param {string} hexcode
 * @param {number} opacity
 * @returns {string}
 */
export function rgba(hexcode, opacity) {
    const values = [
        hexcode.substring(1, 3),
        hexcode.substring(3, 5),
        hexcode.substring(5, 7),
    ].map(string => parseInt(string, 16));
    return `rgba(${values[0]}, ${values[1]}, ${values[2]}, ${opacity})`;
}
