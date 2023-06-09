import replace from 'rollup-plugin-replace';
import typescript from 'rollup-plugin-typescript2';
import copy from 'rollup-plugin-copy'
import babel from 'rollup-plugin-babel';
import configs from './config.js'

const externals = [
  'lottie-web',
  'vue'
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
  const plugins = [
    babel({
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      babelHelpers: 'runtime',      // 使plugin-transform-runtime生效
      // 使用预设
      presets: [['@babel/preset-env', {
        "modules": false,
        "useBuiltIns": "usage",
        // 目标浏览器
        "targets": {
          "edge": '17',
          "firefox": '60',
          "chrome": '67',
          "safari": '11.1',
          'ie': '10',
        },
      }]],
      plugins: [
        //  多次导入的文件，只导入一次
        ['@babel/plugin-transform-runtime']],
    })
  ]
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
      { src: 'src/lib', dest: 'dist/types/' },
    ],
    hook: 'writeBundle', // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
    verbose: true
  }))

  return plugins
}

const genConfig = (configOpts) => ({
  input: 'src/index.ts',
  output: {
    file: configOpts.output,
    format: configOpts.format,
    name: 'vue3-UseAnimations',
    sourcemap: true,
    exports: 'named',
    globals: configOpts.globals
  },
  external: externals,
  plugins: genPlugins(configOpts)
})

const genAllConfigs = (configs) => (Object.keys(configs).map(key => genConfig(configs[key])))

export default genAllConfigs(configs)