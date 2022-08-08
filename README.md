# @dreamistlabs/config-commitlint

Opinionated rules for `commitlint` configuration. For more on `commitlint`, please check out their [documentation](https://commitlint.js.org/#/).

## Installation

```bash
npm install -D @dreamistlabs/config-commitlint
```

## Usage

Extend `@dreamistlabs/config-commitlint` in your `commitlint` configuration file.

```js
// commitlint.config.js
module.exports = {
  extends: ['@dreamistlabs/config-commitlint'],
  rules: {
    ...override rules here
  },
};

```

## Defaults

```js
{
  rules: {
    "body-case": [2, "always", "sentence-case"],
    "body-full-stop": [2, "always", "."],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-case": [2, "always", "sentence-case"],
    "header-max-length": [2, "never", 72],
    "scope-empty": [2, "always"],
    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "type-case": [2, "always", "start-case"],
    "type-empty": [2, "never"],
    "type-enum": [
      2,
      "always",
      [
        "Added",
        "Changed",
        "Chore",
        "Deprecated",
        "Fixed",
        "Removed",
        "Security",
      ],
    ],
  }
}
```
