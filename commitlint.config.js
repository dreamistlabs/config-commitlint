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
    "header-max-length": [2, "never", 72], // off
    "scope-empty": [2, "always"],
    "subject-case": [2, "always", "sentence-case"],
    "subject-empty": [2, "never"], // off
    "subject-full-stop": [2, "never", "."], // off
    "type-case": [2, "always", "start-case"],
    "type-empty": [2, "never"], // off
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
