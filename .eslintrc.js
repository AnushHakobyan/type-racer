const eslintSettings = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: 'airbnb',
    extends: 'airbnb/hooks',
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            modules: true,
        },
    },
    settings: {
        'import/parser': 'babel-eslint',
        'import/resolver': {
            webpack: {
                config: 'webpack.config',
            },
        },
    },
};

module.exports = eslintSettings;
