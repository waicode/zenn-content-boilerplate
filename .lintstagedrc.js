module.exports = {
  "*.{md}": ["yarn lint:markdown"],
  "*": ["yarn lint:prettier", "yarn lint:cspell"],
};
