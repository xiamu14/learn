/**
 *
 * @param {String} selector
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
            console.log('id selector');
            break;
        case '.':
            console.log('class selector');
            break;
        default:
            console.log('element selector');
            break;
    }
}
