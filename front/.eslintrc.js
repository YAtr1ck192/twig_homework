const path = require('path');

module.exports = {
    extends: ['airbnb-base', 'prettier'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    settings: {
        'import/resolver': 'webpack',
    },
    rules: {
        indent: ['error', 4],
        'one-var': 'off',
        'import/first': 'off',
        'func-names': 'off',
        'no-console': 'off',
        'import/prefer-default-export': 'off',
        'no-use-before-define': ['error', { functions: false }],
        // 'no-param-reassign': ["error", { "props": false }],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
            },
        ],
        // import/no-unresolved: Unable to resolve path to module 'vuex'.
        'import/no-unresolved': 'off',
        'import/no-cycle': 'off',
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            env: {
                browser: true,
                jest: true,
            },
            extends: [
                'plugin:@typescript-eslint/recommended',
                'prettier/@typescript-eslint',
            ],
            parserOptions: {
                project: path.resolve(__dirname, './tsconfig.json'),
                tsconfigRootDir: __dirname,
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {},
            },
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                '@typescript-eslint/ban-ts-comment': 'off',
                '@typescript-eslint/no-inferrable-types': 'off',
            },
            settings: {},
        },
    ],
};
