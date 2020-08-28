module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    //'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      ts: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    //'prettier'
  ],
  rules: {
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "react/jsx-props-no-spreading": 0,
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }],
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
      }
    },
  },
};
