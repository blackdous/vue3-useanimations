<template>
  <div class="init wrap w50">
    <h3>安装</h3>
    <pre>
      pnpm i vue3-useanimations -D
      yarn add vue3-useanimations
    </pre>
    <h3>使用</h3>
    <pre>
      import UseAnimations from 'vue3-useanimations'
      import visibility from 'vue3-useanimations/dist/lib/visibility'
      <span v-text="'<UseAnimations :animation=visibility :size=40></UseAnimations>'"></span>
    </pre>
  </div>

  <div class="example wrap w50">
    <h2>常用Icon</h2>
    <BasicDemo></BasicDemo>
  </div>

  <template v-for="(item, index) in iconObj">
    <SectionIcon :iconList="item" :title="index">
    </SectionIcon>
  </template>

  <div class="example wrap w50">
    <h2>自定义Click事件</h2>
    <ClickDemo></ClickDemo>
  </div>

  <div class="example wrap w50">
    <h2>自定义Render函数</h2>
    <RenderDemo></RenderDemo>
  </div>

  <div class="docs wrap w50">
    <h2>Props</h2>
    <DocsTable></DocsTable>
  </div>
</template>

<script lang='ts' setup>
import SectionIcon from './component/SectionIcon.vue'
import DocsTable from './component/DocsTable.vue'
import ClickDemo from './component/ClickDemo.vue'
import BasicDemo from './component/BasicDemo.vue'
import RenderDemo from './component/RenderDemo.vue'
import iconObj from './utils/icon/index'
</script>