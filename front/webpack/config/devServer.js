import { join } from 'path';

import isWindows from 'is-windows';

import { isOpen, rootDir } from '../utils/env';

const defaultPort = 8080;

const devServerHost = isWindows() ? '127.0.0.1' : '0.0.0.0';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

export const devServerConfig = {
    publicPath: '/',
    contentBase: join(rootDir, './public/'),
    port: defaultPort,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    hot: true,
    overlay: false,
    host: devServerHost,
    open: isOpen,
    // writeToDisk: true,
};
