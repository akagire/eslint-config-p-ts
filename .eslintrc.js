module.exports = {
    "extends": [
        "airbnb-base",
        "./index.js"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {},
    overrides: [
      {
        'files': ['*.test.js'],
        env: {
          jest: true,
        },
        rules: {
          'max-len': 'off',
          'import/extensions': 'off',
          'no-unused-vars': 'off',
          '@typescript-eslint/no-unused-vars': 'off',
        },
      }
    ],
};
