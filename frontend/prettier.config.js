/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    plugins: ['prettier-plugin-tailwindcss'],
    singleQuote: true,
    semi: false,
    trailingComma: 'all',
    arrowParens: 'always',
    printWidth: 100,
    tabWidth: 4,
    bracketSpacing: true,
    useTabs: false,
    endOfLine: 'auto',
}

export default config
