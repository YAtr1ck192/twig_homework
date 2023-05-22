import { argv } from 'yargs';

import { rootDir } from '../utils/env';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

export const parseArguments = () => {
    const { env = [] } = argv;
    return env.reduce((accumulator, currentValue) => {
        const [key, value = true] = currentValue.split('=');
        return { ...accumulator, [key]: value };
    }, {});
};

export const arrayFilterEmpty = (array) => array.filter((x) => !!x);

export const pathRewrite = (localUrl, remoteUrl) => (path) =>
    path.replace(new RegExp(localUrl.replace('/', '\\/'), 'g'), remoteUrl);

export const generateHtmlPlugins = (templateDir, basedir, ext) => {
    const templateFiles = fs.readdirSync(path.resolve(rootDir, templateDir), {
        withFileTypes: false,
    });
    let final = [];
    templateFiles.forEach((item) => {
        let path_string = path.resolve(rootDir, templateDir, item);
        if (fs.lstatSync(path_string).isDirectory()) {
            const templateFilesSub = path.resolve(rootDir, templateDir, item);
            const outputFilePath = basedir + '/' + item;
            let subObj = generateHtmlPlugins(
                templateFilesSub,
                outputFilePath,
                ext,
            );
            subObj.forEach((item) => {
                final.push(item);
            });
        } else if (fs.lstatSync(path_string).isFile()) {
            const parts = item.split('.');
            const name = parts[0];
            const extension = parts[1];
            let basedirNew = basedir;
            basedirNew += '/';
            if (name == 'index') {
                if (extension == ext) {
                    final.push(
                        new HtmlWebpackPlugin({
                            filename: `${basedirNew}${name}.html`,
                            template: path.resolve(
                                rootDir,
                                `${templateDir}/${name}.${extension}`,
                            ),
                            inject: false,
                        }),
                    );
                }
            }
        }
    });
    return final;
};

export const readData = (dataPath, context) => {
    let result = {};
    let string = '';

    if (fs.existsSync(dataPath)) {
        context.addDependency(dataPath);

        string = fs.readFileSync(dataPath, 'utf8');
        string = 'function data(){' + string + ';return data}; data()';

        result = eval(string);
    }

    return result;
};
