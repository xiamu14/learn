(function () {
'use strict';

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
 * dom 操作类
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
                throw new Error('typeError\uFF1A' + this.selector + ' is not a string');
            }
            var ele = document.querySelectorAll(this.selector);
            for (var i = 0; i < ele.length; i++) {
                this[i] = ele[i];
            }
            this.length = ele.length;
            return this;
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
