import { devServerConfig } from './config';
import * as plugins from './plugins';
import { generateHtmlPlugins } from './utils/helpers';

const htmlPlugins = generateHtmlPlugins('./src/templates/pages', '.', 'twig');
const htmlPlugins2 = generateHtmlPlugins(
    './src/templates/pages',
    './api/templates',
    'tmp',
);
export default {
    devtool: 'cheap-module-source-map',
    plugins: [...htmlPlugins, ...htmlPlugins2, plugins.miniCssExtractPlugin],
    devServer: devServerConfig,
};
