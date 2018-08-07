module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['react', 'jsx-a11y', 'import', 'prettier'],
  env: {
    browser: true,
    node: true
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': 'error',
    'react/jsx-one-expression-per-line': 0,
    'import/prefer-default-export': 'off',
    'react/forbid-prop-types': 0
  }
};
