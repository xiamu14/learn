/*
 * @Date: 2020-03-10 11:17:43
 * @LastEditors: Pluto
 * @LastEditTime: 2020-03-16 17:47:26
 */
// babel.config.js
module.exports = {
  plugins: [
    ['babel-plugin-react-css-modules', {
      exclude: "node_modules",
      "filetypes": {
        ".scss": {
          "syntax": "postcss-scss"
        }
      },
      autoResolveMultipleImports: true,
      generateScopedName: '[name]_[local]__[hash:base64:5]'
    }, ]
  ],
  presets: [
    [
      'remax',
    ],
  ],
};
