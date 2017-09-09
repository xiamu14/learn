/**
 *
 * @param {String} selector
 */
export function select(selector) {
    if (typeof selector !== 'string') {
        throw new Error( `typeError：${selector} is not a string.` );
    }
    // define Regex of distinguish the different selecotrs
    let regex = //gi
}
