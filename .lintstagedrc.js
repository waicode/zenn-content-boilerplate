module.exports = {
  "*.{md}": ["yarn lint:markdown", "yarn lint:text"],
  "*": ["yarn lint:prettier", "yarn lint:cspell"],
};
