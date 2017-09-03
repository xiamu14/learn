import {Dom} from './dom';

/**
 * @param {String} selector
 * @return {Object} return object
 */
function jQSlim(selector) {
    return new Dom(selector).getNode();
}

window.JQ = jQSlim;
