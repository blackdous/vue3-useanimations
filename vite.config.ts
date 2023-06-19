import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import copy from 'rollup-plugin-copy'

export default defineConfig({
  outDir: 'dist',
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: './src/index.ts',
      name: 'vue3-UseAnimations',
      // the proper extensions will be added
      fileName: 'vue3-UseAnimations',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue', 'lottie-web'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
          lottie: 'lottie-web'
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
    vue({}),
    copy({
      targets: [
        { src: 'src/lib', dest: 'dist/' },
      ],
      hook: 'writeBundle', // 钩子，插件运行在rollup完成打包并将文件写入磁盘之前
      verbose: true
    })
  ],
})