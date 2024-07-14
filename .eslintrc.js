const restrictedImportConfig = [
  {
    paths: ['bignumber.js'],
    excludeFiles: ['src/utilities/helpers/currency.helper.ts'],
  },
  {
    paths: ['tailwind-merge'],
    excludeFiles: ['src/utilities/helpers/format.helper.ts'],
  },
];

const createRestrictedImportRule = (configList) => {
  const paths = configList
    .map((config) => config.paths)
    .filter((paths) => paths)
    .flat();
  const patterns = configList
    .map((config) => config.patterns)
    .filter((patterns) => patterns)
    .flat();
  return {
    paths,
    patterns,
  };
};

const createRestrictedImportOverrides = (configList) => {
  const allImportRile = createRestrictedImportRule(configList);
  return configList.map((config) => {
    const { paths, patterns, excludeFiles } = config;
    return {
      files: excludeFiles,
      rules: {
        'no-restricted-imports': [
          'error',
          {
            paths: allImportRile.paths.filter((path) => !paths?.includes(path)),
            patterns: allImportRile.patterns.filter((pattern) => !patterns?.includes(pattern)),
          },
        ],
      },
    };
  });
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:solid/typescript',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint', 'solid', 'eslint-plugin-local-rules', 'sort-export-all'],
  rules: {
    // it has weird behavior with .ts files, so we turn it off first
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'prettier/prettier': ['off', { endOfLine: 'auto' }],
    indent: ['off', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'max-statements': ['error', 15],
    complexity: ['error', 10],
    'solid/no-destructure': 'off',
    'no-underscore-dangle': ['error', { allow: ['_env_'] }],
    'no-nested-ternary': 'off',
    'local-rules/solid-directive-should-be-used': 'error',
    'local-rules/error-handle': 'error',
    'local-rules/non-nullable-type-assertion-style': 'warn',
    'local-rules/dom-property-directive-cb-params-type': 'warn',
    'no-restricted-imports': ['error', createRestrictedImportRule(restrictedImportConfig)],
    'no-restricted-globals': [
      'error',
      {
        name: 'sessionStorage',
        message: 'use storage.helper',
      },
      {
        name: 'localStorage',
        message: 'use storage.helper',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-void': ['error', { allowAsStatement: true }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
        warnOnUnassignedImports: true,
        pathGroupsExcludedImportTypes: ['**/*.css', '**/*.scss'],
        pathGroups: [
          {
            pattern: '*.{css,scss}',
            patternOptions: { matchBase: true },
            group: 'type',
            position: 'after',
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      rules: {
        // you should turn the original rule off *only* for test files
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/extensions': 'off',
        'max-statements': 'off',
        'solid/reactivity': 'off',
      },
    },
    {
      files: ['src/utilities/helpers/log.helper.ts', 'src/utilities/helpers/urlStatistic.helper.ts'],
      rules: {
        // you should turn the original rule off *only* for test files
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        'no-console': 'off',
      },
    },
    {
      files: ['src/utilities/directives/*.ts'],
      rules: {
        // you should turn the original rule off *only* for test files
        '@typescript-eslint/no-namespace': 'off',
        'local-rules/solid-directive-should-be-used': 'off',
      },
    },
    {
      files: ['*-worker.ts'],
      rules: {
        'no-restricted-globals': 'off',
      },
    },
    {
      files: ['src/utilities/helpers/storage.helper.ts'],
      rules: {
        // can be improve later to avoid removed all restricted globals
        'no-restricted-globals': 'off',
      },
    },
    {
      files: ['src/utilities/api/schema/index.ts', 'src/utilities/api/schema/*/index.ts'],
      rules: {
        'sort-export-all/sort-export-all': ['error'],
      },
    },
    ...createRestrictedImportOverrides(restrictedImportConfig),
  ],
};
