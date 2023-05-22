// import path from 'path';
// import { join } from 'path';
// import { rootDir } from '../utils/env';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config = {
    // filename: '[name].[contenthash].css',
    // chunkFilename: '[id].[contenthash].css',
    // path: join(rootDir, 'public'),
    filename: 'dist/[name].min.css',
    chunkFilename: 'dist/[id].min.css',
};

export const miniCssExtractPlugin = new MiniCssExtractPlugin(config);
