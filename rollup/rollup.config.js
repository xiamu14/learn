// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
export default {
    entry: 'src/main.js',
    format: 'cjs',
    dest: 'dist/bundle.js', // 相当于 --output
    plugins: [
        resolve(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
};