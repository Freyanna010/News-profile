module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true,
    //настройка camelCase
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9]*$',
      {
        message: 'Используйте camelCase для имен классов',
      },
    ],
  },
  ignoreFiles: ['node_modules/**', 'dist/**'],
};
