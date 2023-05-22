import { join } from 'path';

import CopyPlugin from 'copy-webpack-plugin';

import { rootDir } from '../utils/env';

const config = {
    patterns: [
        {
            from: join(rootDir, './src/assets'),
            to: 'dist/assets',
            globOptions: {
                ignore: ['**/fonts/**'],
            },
        },
        {
            from: join(rootDir, './src/uploads'),
            to: join(rootDir, 'public/uploads'),
        },
    ],
};

export const copyPlugin = new CopyPlugin(config);
