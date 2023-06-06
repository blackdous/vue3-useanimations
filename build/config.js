import { uglify } from 'rollup-plugin-uglify';

export default {
  umd: {
    output: 'dist/umd/index.js',
    format: 'umd',
    target: 'es5',
    env: 'production'
  },
  umdMin: {
    output: 'dist/umd/index.min.js',
    format: 'umd',
    target: 'es5',
    plugins: {
      post: [uglify()]
    },
    env: 'production'
  },
  esm: {
    output: 'dist/esm/index.js',
    format: 'esm',
    target: 'es2015',
    genDts: true
  },
  cjs: {
    output: 'dist/cjs/index.js',
    format: 'cjs',
    target: 'es2015'
  }
}