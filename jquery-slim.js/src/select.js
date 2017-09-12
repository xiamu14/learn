/**
 *
 * @param {String} selector
 * @return {{string}} test strnig
 */
export function select(selector) {
    if (typeof selector !== 'string') {
        throw new Error(`typeError：${selector} is not a string.`);
    }
    // define a RegEx to distinguish a string.
    let regex = /^(#|.)\w+/g;
    let result = regex.exec(selector);
    let selectorSlice = selector.slice(1, selector.length);
    console.log(selectorSlice);
    switch (result[1]) {
        case '#':
            return document.getElementById(selectorSlice);
            break;
        case '.':
            return document.getElementsByClassName(selectorSlice);
            break;
        default:
            return document.getElementsByTagName(selector);
            break;
    }
}
