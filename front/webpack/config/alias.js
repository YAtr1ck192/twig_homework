import { join } from 'path';

import { rootDir } from '../utils/env';

export const aliasItems = {
    vue$: 'vue/dist/vue.esm.js',

    '@src': join(rootDir, '/src'),
    '@utilities': join(rootDir, '/src/utilities'),
    '@assets': join(rootDir, '/src/assets'),
    images: join(rootDir, '/src/assets/img'),
    fonts: join(rootDir, '/src/assets/fonts'),
    '@components': join(rootDir, 'src/templates/components'),
    '@vueComponent': join(rootDir, 'src/vue_components'),
    '@pages': join(rootDir, 'src/templates/pages'),
    '@base': join(rootDir, 'src/templates/components/base'),
    '@ui': join(rootDir, 'src/templates/components/ui-components'),
};
