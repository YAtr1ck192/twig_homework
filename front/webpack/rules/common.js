import { rootDir } from '../utils/env';
import { readData } from '../utils/helpers';
import { babelLoader } from './useLoaderRuleItems';

const path = require('path');
const fs = require('fs');

export const typescriptRule = {
    test: /\.ts?$/,
    loader: 'ts-loader',
    options: {
        transpileOnly: true,
    },
    exclude: /node_modules/,
};

export const javascriptRule = {
    test: /\.js$/,
    use: [babelLoader],
    exclude: /node_modules/,
};

export const htmlRule = {
    test: /\.(html)$/,
    use: {
        loader: 'html-loader',
    },
};

export const imagesRule = {
    test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
    type: 'asset/resource',
    generator: {
        filename: 'dist/assets/img/[hash][ext][query]',
    },
};

export const fontsRule = {
    test: /\.(woff(2)?|eot|ttf|otf|)$/,
    type: 'asset/resource',
    generator: {
        filename: 'dist/assets/fonts/[hash][ext][query]',
    },
};

export const twigRule = {
    enforce: 'post',
    test: /\.twig$/,
    use: [
        'raw-loader',
        (info) => ({
            loader: 'twig-html-loader',
            options: {
                namespaces: {
                    layouts: 'src/templates/layouts',
                    pages: 'src/templates/pages',
                    components: 'src/templates/components',
                    base: 'src/templates/components/base',
                    ui: 'src/templates/components/ui-components',
                },
                functions: {
                    t(value, text) {
                        return text;
                    },
                    constant(JSON_UNESCAPED_UNICODE) {
                        return;
                    },
                },
                data: (context) => {
                    //console.log('twig-html-loader loader!!!');

                    const pathToPage = path.parse(info.resource);
                    const pageDataJsPath = path.join(pathToPage.dir, `info.js`);
                    const pageData = readData(pageDataJsPath, context);

                    const mainDataPath = path.join(rootDir, 'src/data.js');
                    const mainData = readData(mainDataPath, context);

                    return Object.assign({}, mainData, pageData, {
                        firstLoad: true,
                    });
                },
            },
        }),
    ],
};

export const tmpRule = {
    enforce: 'post',
    test: /\.tmp$/,
    use: [
        'raw-loader',
        (info) => ({
            loader: 'twig-html-loader',
            options: {
                namespaces: {
                    layouts: 'src/templates/layouts',
                    pages: 'src/templates/pages',
                    components: 'src/templates/components',
                    base: 'src/templates/components/base',
                    ui: 'src/templates/components/ui-components',
                },
                functions: {
                    t(value, text) {
                        return text;
                    },
                    constant(JSON_UNESCAPED_UNICODE) {
                        return;
                    },
                },
                data: (context) => {
                    //  console.log('tpm-html-loader loader!!!');

                    const pathToPage = path.parse(info.resource);

                    const pageDataJsPath = path.join(pathToPage.dir, `info.js`);

                    const mainData = readData(pageDataJsPath, context);

                    return Object.assign({}, mainData, {
                        firstLoad: false,
                    });
                },
            },
        }),
    ],
};

export const vueRule = {
    test: /\.vue$/,
    loader: 'vue-loader',
};
