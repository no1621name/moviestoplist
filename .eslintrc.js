module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    reqireFiles: 'off',
    'vue/multi-word-component-names': ['error', {
      ignores: ['Header', 'Loader', 'Notification', 'Toast'],
    }],
    'vue/no-mutating-props': 'off',
  },
};
