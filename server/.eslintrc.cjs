const config = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/eslint-plugin',
        'unused-imports',
        'import',
        'simple-import-sort',
    ],
    extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ],
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/triple-slash-reference': 'off',
        'import/no-duplicates': [
            'error',
            {
                'prefer-inline': true,
            },
        ],
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^[a-z]'],
                    // Packages starting with `~`, `../`,  `./`
                    [
                        '^~',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                    ],
                    // Side effect imports
                    ['^\\u0000'],
                ],
            },
        ],
    },
}

module.exports = config
