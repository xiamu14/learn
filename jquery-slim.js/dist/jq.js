'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function dom() {
    console.log('测试');
    return this;
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var jQuery = function jQuery() {
    classCallCheck(this, jQuery);

    this.version = '1.0.0';
    this.dom = dom;
};

exports.jQuery = jQuery;
//# sourceMappingURL=jq.js.map
