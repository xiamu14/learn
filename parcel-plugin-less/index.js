module.exports = function (bundler) {
  // bundler.addAssetType('html', require.resolve('./SvelteAsset'));
  bundler.addAssetType('less', require.resolve('./less'));
};
