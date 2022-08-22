/**
 * https://commitlint.js.org/#/reference-rules
 * https://www.conventionalcommits.org/en/v1.0.0/#summary
 * type(scope?): subject
 * body?
 * footer?
 */

module.exports = {
  rules: {
    "body-case": [2, "always", "sentence-case"],
    "body-full-stop": [2, "always", "."],
    "body-leading-blank": [2, "always"],
    "footer-leading-blank": [2, "always"],
    "header-case": [2, "always", "sentence-case"],
    "header-max-length": [0, "always"], // off
    "scope-empty": [2, "always"],
    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [0, "always"], // off
    "subject-full-stop": [0, "always"], // off
    "type-case": [2, "always", "start-case"],
    "type-empty": [0, "always"], // off
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
  },
};
