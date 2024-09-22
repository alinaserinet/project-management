import jsPlugin from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import recommendedPrettierPlugin from 'eslint-plugin-prettier/recommended';
import promisePlugin from 'eslint-plugin-promise';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tsESLint from 'typescript-eslint';

export default [
  jsPlugin.configs.recommended,
  ...tsESLint.configs.recommended,
  reactPlugin.configs.flat.recommended,
  recommendedPrettierPlugin,
  promisePlugin.configs['flat/recommended'],
  jestPlugin.configs['flat/recommended'],
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSortPlugin,
      'react-hooks': hooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      ...hooksPlugin.configs.recommended.rules,
      ...jestPlugin.configs['flat/recommended'].rules,

      // base
      'camelcase': ['warn', { properties: 'always' }],
      'comma-spacing': ['warn', { after: true, before: false }],
      'max-depth': ['error', 4],
      'max-lines': [
        'error',
        { max: 2500, skipBlankLines: false, skipComments: false },
      ],
      'max-lines-per-function': ['error', 150],
      'max-nested-callbacks': ['error', 7],
      'max-params': ['error', 7],
      'max-statements': ['error', 40],
      'max-statements-per-line': ['error', { max: 1 }],
      'multiline-comment-style': 'off',
      'new-cap': 'off',
      'no-alert': 'error',
      'no-array-constructor': 'error',
      'no-await-in-loop': 'error',
      'no-console': 'warn',
      'no-const-assign': 'error',

      // import
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': 'warn',

      // react
      'react/react-in-jsx-scope': 'off',
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],

      // jsx
      'jsx-a11y/alt-text': 'warn',
      'jsx-a11y/anchor-has-content': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/aria-activedescendant-has-tabindex': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-role': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/autocomplete-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/control-has-associated-label': 'off',
      'jsx-a11y/heading-has-content': 'error',
      'jsx-a11y/html-has-lang': 'error',
      'jsx-a11y/iframe-has-title': 'error',
      'jsx-a11y/img-redundant-alt': 'error',
      'jsx-a11y/interactive-supports-focus': 'warn',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/lang': 'error',
      'jsx-a11y/media-has-caption': 'warn',
      'jsx-a11y/mouse-events-have-key-events': 'error',
      'jsx-a11y/no-access-key': 'error',
      'jsx-a11y/no-aria-hidden-on-focusable': 'warn',
      'jsx-a11y/no-autofocus': 'off',
      'jsx-a11y/no-distracting-elements': 'error',
      'jsx-a11y/no-interactive-element-to-noninteractive-role': 'warn',
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/no-noninteractive-element-to-interactive-role': 'warn',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'jsx-a11y/no-redundant-roles': 'error',
      'jsx-a11y/no-static-element-interactions': 'off',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      'jsx-a11y/scope': 'error',
      'jsx-a11y/tabindex-no-positive': 'warn',
      'jsx-a11y/anchor-ambiguous-text': 'off',
      'jsx-a11y/prefer-tag-over-role': 'off',
    },
  },
];
