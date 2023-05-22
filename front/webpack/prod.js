import TerserJSPlugin from 'terser-webpack-plugin';

import * as plugins from './plugins';
import { generateHtmlPlugins } from './utils/helpers';

const htmlPlugins = generateHtmlPlugins('./src/templates/pages', '.', 'twig');
const htmlPlugins2 = generateHtmlPlugins(
    './src/templates/pages',
    './api/templates',
    'tmp',
);

export default {
    optimization: {
        minimize: true,
        minimizer: [new TerserJSPlugin({ parallel: true })],
    },
    plugins: [
        plugins.cleanWebpackPlugin,
        plugins.miniCssExtractPlugin,
        ...htmlPlugins,
        ...htmlPlugins2,
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
};
