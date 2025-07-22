module.exports = {
  extends: '@mate-academy/eslint-config',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
