const config = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: true,
    },
    plugins: [
        '@typescript-eslint',
        '@typescript-eslint/eslint-plugin',
        'react',
        'unused-imports',
        'import',
        'simple-import-sort',
    ],
    extends: [
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
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
                    // `react` first, `next` second, then packages starting with a character
                    ['^react$', '^next', '^[a-z]'],
                    // Packages starting with `~`, `../`,  `./`
                    [
                        '^~',
                        '^\\.\\.(?!/?$)',
                        '^\\.\\./?$',
                        '^\\./(?=.*/)(?!/?$)',
                        '^\\.(?!/?$)',
                        '^\\./?$',
                    ],
                    // Style imports
                    ['^.+\\.s?css$'],
                    // Side effect imports
                    ['^\\u0000'],
                ],
            },
        ],
    },
}

module.exports = config
