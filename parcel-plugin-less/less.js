const less = require('less');
const JSAsset = require('parcel-bundler/src/assets/JSAsset');

class LessAsset extends JSAsset {

  constructor(name, pkg, options) {
    super(name, pkg, options);
    this.type = 'less';
  }

  generate() {
    return {
      less: this.code
    };
  }

  parse(code) {
    less.render('.class { width: (1 + 1) }', function (e, output) {
      this.code = output.css;
    });
  }

}

module.exports = LessAsset;
