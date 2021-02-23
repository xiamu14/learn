/**
 * @fileoverview generic type naming
 * @author generic-type-naming
 */
"use strict";

// MARKED: Requirements
var path = require("path");
var rule = require("../../../lib/rules/generic-type-naming"),
  RuleTester = require("eslint").RuleTester;

// MARKED: Tests
var ruleTester = new RuleTester({
  parser: path.resolve("./node_modules/@typescript-eslint/parser"),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
});

ruleTester.run("generic-type-naming", rule, {
  valid: [
    { code: "function get<Props, State>() {}", options: [] },
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "function get<P>() {}",
      errors: [
        {
          message: "Type parameter P does not match rule ^([A-Z]{1}|[A-Z]{3,})[a-z]+[a-zA-Z]+$.",
          type: "TSTypeParameter",
        },
      ],
    },
  ],
});
