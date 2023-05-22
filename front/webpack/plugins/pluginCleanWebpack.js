import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const config = {
    cleanOnceBeforeBuildPatterns: [
        'dist/*.css',
        'dist/*.css.map',
        'dist/*.js',
        '!profile.json',
    ],
};

export const cleanWebpackPlugin = new CleanWebpackPlugin(config);
