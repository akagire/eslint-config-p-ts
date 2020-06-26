module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    'no-null',
    'use-optional-annotation',
  ],
  rules: {
    // NOTE: @typescript-eslint/no-unused-vars で対応
    'no-unused-vars': 'off',
    'no-tabs': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    // TODO: このルールをうまく再現できていない
    eqeqeq: ['error', 'smart'],
    // NOTE: typescript-eslint/naming-conventionで対応
    camelcase: 'off',

    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: true,
      },
    }],

    '@typescript-eslint/naming-convention': ['error',
      { selector: 'variable', format: ['camelCase', 'UPPER_CASE'] },
      { selector: 'function', format: ['camelCase'] },
      { selector: 'property', format: ['camelCase'] },
      { selector: 'parameterProperty', format: ['camelCase'] },
      { selector: 'method', format: ['camelCase'] },
      { selector: 'accessor', format: ['camelCase'] },
      { selector: 'enumMember', format: ['PascalCase'] },
      { selector: 'typeLike', format: ['PascalCase'] },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: 'I[A-Z0-9].*',
          match: true,
        },
      },
    ],

    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/array-type': ['error', {
      default: 'array',
      readonly: 'array',
    }],
    '@typescript-eslint/type-annotation-spacing': ['error'],

    'import/prefer-default-export': 'off',
    'import/no-default-export': ['warn'],

    'no-null/no-null': 'error',
    'use-optional-annotation/use-optional-annotation': 'error',

    '@typescript-eslint/no-unused-vars': ['error', {
      argsIgnorePattern: '^_',
    }],

    // TODO: try catch ではなく、 await catchを使う
    // https://persol-service-dev.esa.io/posts/347#%5BSHOULD%5D%20try-catch%E3%81%AF%E9%81%BF%E3%81%91%E3%80%81await%20catch%E3%82%92%E5%8F%82%E7%85%A7%E3%81%97%E3%81%BE%E3%81%99
    // TODO: [MUST] オブジェクトがnullまたはundefinedであるかの判定はtruthyを使用する
    // TODO: [SHOULD] callback を避ける
  },
};
