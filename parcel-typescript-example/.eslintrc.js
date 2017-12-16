module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "mocha": true
  },
  "extends": "airbnb/base",
  "plugins": [
    "import"
  ],
  "settings": {
    "import/parser": "babel-eslint",
    "import/resolve": {
      "moduleDirectory": ["node_modules", "src"]
    }
  },
  "rules": {
    // "max-len": [1, 120, 2, { ignoreComments: true }],
    "no-console": 0
  }
}
