import copy from 'rollup-plugin-copy'

export default () => {
  return copy({
    targets: [
      { src: 'dist/build.es.ts', dest: 'dist/', rename: 'sc-ui.es.min.js' }
    ],
    hook: 'writeBundle', // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
    verbose: true
  })
}