<template>
  <div class="wrap w50">
    <h2>{{ curProps.title?.slice(0, 1).toLocaleUpperCase() + curProps.title?.slice(1) }}</h2>
    <div class="disFlex">
      <template 
        v-for="item in curProps.iconList"
      >
        <div class="iconItem">
          <div class="iconItem-icon">
            <UseAnimations :animation="item.animation" :size="item.size">
            </UseAnimations>
          </div>
          <div class="iconItem-info">
            <span class="iconItem-effectType">
              {{(item.effectType || '').toLocaleUpperCase()}}
            </span>
            <p class="iconItem-name">
              {{item.name}}
            </p>
          </div>
          <span class="iconItem-copy" @click="() => handleCopy(item)">
            copy
          </span>
          <a
            :href="item.link"
            class="iconItem-download"
            target="_blank"
          >
            download
          </a>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'
import UseAnimations from 'vue3-useanimations'
import {useClipboard} from '@vueuse/core'
import { message } from 'ant-design-vue'

interface IconItem {
  name: string,
  effectType: string,
  animation: object,
  link: string,
  size: number
}
type IconList = Array<IconItem>

export default defineComponent({
  name: "SectionIcon",
  components: {
    UseAnimations
  },
  props: {
    iconList: {
      type: Array as PropType<IconList>,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default () {
        return ''
      }
    }
  },
  setup (props) {
    const curProps = computed(() => {
      return props
    })

    
    const handleCopy = (item:any) => {
      const { copy, copied } = useClipboard({source: item.name})
      copy(item.name)
      if (copied) {
        message.success('success Copy!')
      }
    }

    return {
      curProps,
      handleCopy
    }
  }
})

</script>

<style scoped>
</style>
