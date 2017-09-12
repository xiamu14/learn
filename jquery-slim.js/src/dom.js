import {select} from './select';

/**
 * dom 获取类
 * support:
 * - Class Slector(".class")
 * - Element Slector("element")
 * - ID Slector("#ID")
 */
export class Dom {
    /**
     *
     * @param {String} selector
     */
    constructor(selector) {
        this.selector = selector;
    }

    /**
     * get document element dom
     * @return {Object} {return this}
     */
    getNode() {
        // checkout whether parameter is a string.
        if (typeof this.selector !== 'string') {
            throw new Error( `typeError：${this.selector} is not a string.` );
        }
        let ele = select(this.selector);
        console.log(ele);
        console.log(ele instanceof Object);
        // if ele is not valid ,return empty object.
        if (ele.length === 0) {
            throw new Error(`unexpect param:${this.selector} is not valid.`);
        }
        for (let i = 0; i < ele.length; i ++) {
            this[i] = ele[i];
        }
        this.length = ele.length;
        return this;
    }

    /**
     * @return {String} {return textContent}
     */
    text() {
        return this[0].textContent;
    }
}
