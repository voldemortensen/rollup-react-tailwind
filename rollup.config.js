import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';

const NODE_ENV = process.env.NODE_ENV || "development";

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'module',
    sourcemap: true
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    postcss({
      plugins: []
    }),
    babel({
      exclude: "node_modules/**"
    }),
    resolve(),
    commonjs()
  ]
}
