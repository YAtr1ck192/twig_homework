import path from 'path';

import { aliasItems, devServerUrl, externalItems } from './config';
import entry from './entry';
import optimization from './optimization';
import * as plugins from './plugins';
import * as rules from './rules';
import { isDevServer, isProd, rootDir } from './utils/env';
import { arrayFilterEmpty } from './utils/helpers';

export default {
    context: __dirname,
    // target: ['web', 'es5'],
    target: 'web',
    mode: isProd ? 'production' : 'development',
    entry,
    output: {
        path: path.join(rootDir, 'public'),
        publicPath: isDevServer ? devServerUrl : './',
        filename: 'dist/[name].min.js',
        //    ? '[name].[fullhash].js'
        //    : '[name].[contenthash].js',
    },
    module: {
        rules: arrayFilterEmpty([
            rules.twigRule,
            rules.tmpRule,
            rules.vueRule,
            rules.javascriptRule,
            rules.typescriptRule,
            rules.imagesRule,
            rules.fontsRule,
            rules.cssRule,
            ...rules.sassRules,
            ...rules.svgRules,
        ]),
    },
    plugins: arrayFilterEmpty([
        plugins.vueLoaderPlugin,
        plugins.providePlugin,
        plugins.definePlugin,
        plugins.forkTsCheckerWebpackPlugin,
        plugins.esLintPlugin,
        plugins.copyPlugin,
    ]),
    resolve: {
        alias: aliasItems,
        extensions: ['*', '.vue', '.ts', '.js'],
    },
    stats: {
        children: true,
    },
    optimization,
    externals: externalItems,
};
