/*
* @param {string} text - Text to slice
* @param {number} limit - Limit of characters
* @returns {string} - Sliced text
*/
export function textSlicer(text: string, limit: number = 55) {
    return text.length > limit ? text.slice(0, limit) + '...' : text;
}