import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    dest: 'dist/jq.js',
    moduleName: 'jquerySlim',
    format: 'cjs',
    plugins: [babel()],
    sourceMap: true
};

