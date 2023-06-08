<template>
  <div> CLICK_PLAY_AND_BACKWARDS </div>
  <Space>
    <div class="disFlex"> 
      <UseAnimations :animation="visibility2" :size="56"></UseAnimations>
      <UseAnimations :animation="searchToX" :size="56"></UseAnimations>
      <UseAnimations :animation="maximizeMinimize" :size="56"></UseAnimations>
      <UseAnimations :animation="notification" :size="56"></UseAnimations>
    </div>
  </Space>
  <div> CLICK_PLAY </div>
  <Space>
    <div class="disFlex"> 
      <UseAnimations :animation="download" :size="56"></UseAnimations>
      <UseAnimations :animation="copy" :size="56"></UseAnimations>
    </div>
  </Space>
  <div> HOVER_PLAY_AND_BACKWARDS </div>
  <Space>
    <UseAnimations :animation="settings" :size="56"></UseAnimations>
    <UseAnimations :animation="trash" :size="56"></UseAnimations>
    <UseAnimations :animation="help" effect-type="HOVER_PLAY_AND_BACKWARDS" :size="56"></UseAnimations>
    <UseAnimations :animation="alertCircle" effect-type="HOVER_PLAY_AND_BACKWARDS" :size="56"></UseAnimations>
  </Space>
  <div> HOVER_PLAY_AND_STOP </div>
  <Space>
    <UseAnimations :animation="userPlus" :size="56"></UseAnimations>
    <UseAnimations :animation="userMinus" :size="56"></UseAnimations>
  </Space>
  <div> LOOP_PLAY </div>
  <Space>
    <UseAnimations :animation="notification3" :size="56"></UseAnimations>
    <UseAnimations :animation="notification4" :size="56"></UseAnimations>
  </Space>
</template>

<script lang='ts' setup>
// import { onMounted } from 'vue'
import UseAnimations from 'vue3-useanimations'
import { Space } from 'ant-design-vue'
// import { UseAnimations } from '../component/index'
import visibility2 from 'vue3-useanimations/dist/types/lib/visibility2'
import searchToX from 'vue3-useanimations/dist/types/lib/searchToX'
import settings from 'vue3-useanimations/dist/types/lib/settings'
import download from 'vue3-useanimations/dist/types/lib/download'
import trash from 'vue3-useanimations/dist/types/lib/trash'
import copy from 'vue3-useanimations/dist/types/lib/copy'
import help from 'vue3-useanimations/dist/types/lib/help'
import alertCircle from 'vue3-useanimations/dist/types/lib/alertCircle'
import maximizeMinimize from 'vue3-useanimations/dist/types/lib/maximizeMinimize'
import notification from 'vue3-useanimations/dist/types/lib/notification'
import notification3 from 'vue3-useanimations/dist/types/lib/notification3'
import notification4 from 'vue3-useanimations/dist/types/lib/notification4'
import userPlus from 'vue3-useanimations/dist/types/lib/userPlus'
import userMinus from 'vue3-useanimations/dist/types/lib/userMinus'
</script>

<style scoped>
.sss {
  font-size: 22px;
  color: red;
}
.disFlex {
  align-items: center;
}
.disFlex .anticon  {
  padding: 2px 14px;
}
</style>
