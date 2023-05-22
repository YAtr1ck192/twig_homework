import { join } from 'path';

import { rootDir } from './utils/env';

export default {
    main: [
        join(rootDir, '/src/main.js'),
        join(rootDir, '/src/styles/index.sass'),
        join(__dirname, './utils/cleanConsoleOnHMR.js'),
    ],
};
