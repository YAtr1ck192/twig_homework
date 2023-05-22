export const svgRule = {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    issuer: { not: [/\.[jt]sx$/] },
    type: 'asset/inline',
};

export const svgRules = [svgRule];
