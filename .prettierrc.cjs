module.exports = {
    plugins: [require.resolve('prettier-plugin-astro')],
    overrides: [
        {
            files: '*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
    "arrowParens": "avoid",
    "bracketSpacing": true,
    "htmlWhitespaceSensitivity": "ignore",
    "bracketSameLine": true,
    "printWidth": 120,
    "proseWrap": "preserve",
    "semi": true,
    "singleQuote": false,
    "trailingComma": "all",
    "useTabs": true
};