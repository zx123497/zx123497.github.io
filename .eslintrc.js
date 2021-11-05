module.exports = {
    env: {
        browser: true,
        es2021: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['plugin:react/recommended', 'google'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 10,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'indent': ['error', 4],
        'linebreak-style': ['off', 'windows'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'react/prop-types': 'off',
        'max-len': ['error', { code: 120 }],
        'quote-props': ['warn'],
    },
}
