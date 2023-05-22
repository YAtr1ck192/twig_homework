const { argv } = require('yargs');

module.exports = (api) => {
    const env = argv.env || [];
    const mode = !!env.find((value) => value === 'mode=dev')
        ? 'development'
        : 'production';

    api.cache.using(() => mode);

    return {
        presets: [
            [
                '@babel/preset-env',
                {
                    targets: {
                        browsers: ['>1%', 'last 4 versions', 'not ie < 9'],
                    },
                    useBuiltIns: 'usage',
                    debug: false,
                    corejs: 3,
                },
            ],
        ],
        plugins: [
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-export-namespace-from',
            '@babel/plugin-proposal-throw-expressions',
            '@babel/proposal-object-rest-spread',
        ],
    };
};
