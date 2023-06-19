<template>
  <div style="padding: 20px ">
    <span>radioButton</span>
    <UseAnimations
      :reverse="checked"
      @click="handleClick"
      :size="40"
      :wrapperStyle="{ marginTop: '5px' }"
      :animation="radioButton"
    />
  </div>
</template>


<script lang='ts' setup>
import { ref } from 'vue'
import UseAnimations from 'vue3-useanimations'
import radioButton from 'vue3-useanimations/dist/lib/radioButton'


const checked = ref(false)


const handleClick = () => {
  checked.value = !checked.value
}
</script>