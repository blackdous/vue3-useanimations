import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'
import vue from 'rollup-plugin-vue'
import configs from './config.js'

const externals = [
  'vue',
  'lottie-web'
]

const genTsPlugin = (configOpts) => typescript({
  useTsconfigDeclarationDir: true,
  tsconfigOverride: {
    ccompilerOptions: {
      target: configOpts.target,
      declaration: configOpts.genDts
    }
  }
})

const genPlugins = (configOpts) => {
  const plugins = []
  if (configOpts.env) {
    plugins.push(replace({
      'process.env.NODE_ENV': JSON.stringify(configOpts.env)
    }))
  }
  plugins.push(replace({
    'procee.env.MODULE_FORMAT': JSON.stringify(configOpts.format)
  }))
  if (configOpts.plugins && configOpts.plugins.pre) {
    plugins.push(...configOpts.plugins.pre)
  }
  plugins.push(genTsPlugin(configOpts))

  if (configOpts.plugins && configOpts.plugins.post) {
    plugins.push(...configOpts.plugins.post)
  }

  plugins.push(copy({
    targets: [
      { src: 'src/lib', dest: 'dist/types' },
    ],
    hook: 'writeBundle', // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
    verbose: true
  }))
  plugins.push(vue())

  return plugins
}

const genConfig = (configOpts) => ({
  input: 'src/index.ts',
  output: {
    file: configOpts.output,
    format: configOpts.format,
    name: 'vue3-useAnimations',
    sourcemap: true,
    exports: 'named',
    globals: configOpts.globals
  },
  external: externals,
  plugins: genPlugins(configOpts)
})

const genAllConfigs = (configs) => (Object.keys(configs).map(key => genConfig(configs[key])))

export default genAllConfigs(configs)