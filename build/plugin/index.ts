import type { PluginOption } from 'vite';

import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import vueJsx from "@vitejs/plugin-vue-jsx";
// @ts-ignore
import Components from 'unplugin-vue-components/vite';
// @ts-ignore
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';
import DefineOptions from 'unplugin-vue-define-options/vite';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';

import legacy from './legacy';
import visualizerPlugin from './visualizer';
// import transformLess from './transformLess';
import copy from './copy';

import {
  VITE_APP_ANALYZE,
  VITE_APP_COMPRESS_GZIP,
  VITE_APP_COMPRESS_GZIP_DELETE_FILE,
  VITE_APP_LEGACY,
} from '../constant';

export const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true,
  };
};
export const createVitePlugins = (isBuild: boolean) => {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true,
    }),
    vue({
      template: {
        compilerOptions: {
          directiveTransforms: {
            'text-collapse': ssrTransformCustomDir,
          },
        },
      },
    }),
    // transformLess(),
    vueJsx(),
    vueSetupExtend(),
    DefineOptions(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: 'less',
        }),
      ],
      dts: true,
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    copy()
  ];
  // vitePlugins.push();
  // legacy
  VITE_APP_LEGACY && isBuild && vitePlugins.push(legacy());

  // visualizer
  VITE_APP_ANALYZE && vitePlugins.push(visualizerPlugin());
  if (isBuild) {
    // gzip
    VITE_APP_COMPRESS_GZIP &&
      vitePlugins.push(
        viteCompression({
          deleteOriginFile: VITE_APP_COMPRESS_GZIP_DELETE_FILE,
        }),
      );
  }
  return vitePlugins;
};
