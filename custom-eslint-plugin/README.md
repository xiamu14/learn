# eslint-plugin-custom

custom rule

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-custom`:

```
$ npm install eslint-plugin-custom --save-dev
```


## Usage

Add `custom` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "custom"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "custom/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





