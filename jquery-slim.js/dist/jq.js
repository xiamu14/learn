(function () {
'use strict';

/**
 *
 * @param {String} selector
 * @return {{string}} test strnig
 */
function select(selector) {
    if (typeof selector !== 'string') {
        throw new Error('typeError\uFF1A' + selector + ' is not a string.');
    }
    // define a RegEx to distinguish a string.
    var regex = /^(#|.)\w+/g;
    var result = regex.exec(selector);
    var selectorSlice = selector.slice(1, selector.length);
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

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/**
 * dom 获取类
 * support:
 * - Class Slector(".class")
 * - Element Slector("element")
 * - ID Slector("#ID")
 */
var Dom = function () {
    /**
     *
     * @param {String} selector
     */
    function Dom(selector) {
        classCallCheck(this, Dom);

        this.selector = selector;
    }

    /**
     * get document element dom
     * @return {Object} {return this}
     */


    createClass(Dom, [{
        key: 'getNode',
        value: function getNode() {
            // checkout whether parameter is a string.
            if (typeof this.selector !== 'string') {
                throw new Error('typeError\uFF1A' + this.selector + ' is not a string.');
            }
            var ele = select(this.selector);
            console.log(ele);
            console.log(ele instanceof Object);
            // if ele is not valid ,return empty object.
            if (ele.length === 0) {
                throw new Error('unexpect param:' + this.selector + ' is not valid.');
            }
            for (var i = 0; i < ele.length; i++) {
                this[i] = ele[i];
            }
            this.length = ele.length;
            return this;
        }

        /**
         * @return {String} {return textContent}
         */

    }, {
        key: 'text',
        value: function text() {
            return this[0].textContent;
        }
    }]);
    return Dom;
}();

/**
 * @param {String} selector
 * @return {Object} return object
 */
function jQSlim(selector) {
  return new Dom(selector).getNode();
}

window.JQ = jQSlim;

}());
//# sourceMappingURL=jq.js.map
