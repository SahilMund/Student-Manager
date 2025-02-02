import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';
import esLintPluginSonarjs from 'eslint-plugin-sonarjs';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    // Base configuration for JavaScript
    pluginJs.configs.recommended,

    // Base configuration for TypeScript
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
            globals: globals.browser,
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            sonarjs: esLintPluginSonarjs,
        },
        rules: {
            ...typescriptPlugin.configs.recommended.rules, // Apply TypeScript recommended rules
        },
    },

    // Base configuration for React
    {
        files: ['**/*.{jsx,tsx,ts}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                jsx: true,
            },
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
            prettier: prettierPlugin,
        },
        rules: {
            ...pluginReact.configs.flat.recommended.rules, // Apply React recommended rules
            'react/react-in-jsx-scope': 'off', // Disable unnecessary React import rule
            // 'prettier/prettier': [
            //     'error'
            // ],
            'no-console': ['error', { allow: ['warn', 'error'] }],
            '@typescript-eslint/no-var-requires': 'off',
            'padding-line-between-statements': [
                'error',
                {
                    blankLine: 'always',
                    prev: ['const', 'let', 'var'],
                    next: '*',
                },
                {
                    blankLine: 'any',
                    prev: ['const', 'let', 'var'],
                    next: ['const', 'let', 'var'],
                },
                {
                    blankLine: 'any',
                    prev: ['case', 'default'],
                    next: 'break',
                },
                {
                    blankLine: 'any',
                    prev: 'case',
                    next: 'case',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return',
                },
                {
                    blankLine: 'always',
                    prev: 'block',
                    next: '*',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'block',
                },
                {
                    blankLine: 'always',
                    prev: 'block-like',
                    next: '*',
                },
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'block-like',
                },
            ],
            'react/jsx-uses-react': 'off',
            'react/no-unescaped-entities': 'off',
            'no-restricted-globals': 'off',
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-explicit-any': 'warn',
            'react-hooks/rules-of-hooks': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'no-case-declarations': 'off',
        },
        settings: {
            react: {
                version: 'detect', // Automatically detect React version
            },
        },
    },
];
