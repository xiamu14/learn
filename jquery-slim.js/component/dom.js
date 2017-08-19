/**
 *
 */
export default class Dom {
    /**
     * @param {string} selector
     * @return {Object}
     */
    element(selector) {
        if (document.querySelector(selector)) {
            let elems = document.querySelectorAll(selector);
            elems.forEach(function(element, index) {
                this[index] = element;
            }, this);
            this.length = elems.length;
            return this;
        }
    }
}