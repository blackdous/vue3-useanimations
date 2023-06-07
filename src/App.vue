<template>
  <template v-for="(item, index) in iconObj">
    <SectionIcon :iconList="item" :title="index">
    </SectionIcon>
  </template>
</template>

<script lang='ts' setup>
import SectionIcon from './component/SectionIcon.vue';
import iconObj from './utils/icon/index'
</script>