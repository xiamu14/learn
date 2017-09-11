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
    switch (result[1]) {
        case '#':
            return 'id selector';
            break;
        case '.':
            return 'class selector';
            break;
        default:
            return 'element selector';
            break;
    }
}
