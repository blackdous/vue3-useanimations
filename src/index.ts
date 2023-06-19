import lottie from "lottie-web";
import type { AnimationItem, AnimationConfigWithData, AnimationConfig } from 'lottie-web';
import { ref, defineComponent, PropType, watch, onMounted, unref, h, ExtractPropTypes, computed } from 'vue'

import { getEffect, getEvents } from './utils';
import type { Animation, AnimationEffect } from './utils';

const getRandomId = (key: Animation['animationKey']) =>
  `${key}_i${Math.floor(Math.random() * 10000 + 1)}`;



const propsObj = {
  effectType: {
    type: String as PropType<AnimationEffect>
  },
  animation: {
    type: Object as PropType<Animation>
  },
  reverse: Boolean,
  strokeColor: String,
  fillColor: String,
  pathCss: String,
  options: Object as PropType<AnimationConfig>,
  size: Number,
  loop: [String, Number],
  autoplay: Boolean,
  speed: Number,
  render: Function,
  wrapperStyle: Object,
  onClick: Function
}

export declare type PropsType = Partial<ExtractPropTypes<typeof propsObj>>

const UseAnimations = defineComponent({
  name: 'UseAnimations',
  props: propsObj,
  setup (props) {
    const {
      // @ts-ignore
      animation: { animationData, animationKey },
      reverse = false,
      size = 24,
      speed = 1,
      strokeColor,
      fillColor,
      pathCss,
      loop,
      autoplay,
      wrapperStyle,
      options,
      onClick,
      render,
      effectType,
      ...other
    } = props
    const animation = ref<AnimationItem>()
    const animationId = ref<string>(getRandomId(animationKey))
    const events = ref<any>()
    const refCur = ref(null)
    const animEffect: AnimationEffect = effectType || getEffect(animationKey) as AnimationEffect;
    const defaultStyles = {
      overflow: 'hidden',
      outline: 'none',
      width: `${size}px`,
      height: `${size}px`,
      cursor: 'pointer',
      display: 'inline-block',
      ...wrapperStyle,
    }

    onMounted(() => {
      // console.log('animEffect: ', animEffect);

      const defaultOptions: AnimationConfigWithData = {
        //@ts-ignore
        container: refCur.value as Element,
        renderer: 'svg',
        animationData,
        //@ts-ignore
        loop: loop || animEffect === 'LOOP_PLAY',
        autoplay: autoplay || animEffect === 'LOOP_PLAY',
        rendererSettings: {
          // LOADS DOM ELEMENTS WHEN NEEDED. MIGHT SPEED UP INITIALIZATION FOR LARGE NUMBER OF ELEMENTS.
          progressiveLoad: true,
          // lottie-web missing id type
          // @ts-ignore-next-line
          id: animationId,
        },
        ...options,
      };
  
      // @ts-ignore
      animation.value = lottie.loadAnimation(defaultOptions)
    })


    watch([() => strokeColor, () => fillColor, () => pathCss], () => {
      try {
        const sheetEl: any = document.getElementById('useAnimationsSheet');
        const sheet = sheetEl ? sheetEl.sheet || sheetEl.styleSheet : null;

        if (sheet) {
          const animationRuleIndex = Array.from(sheet.cssRules).findIndex(
            (rule: any) => rule.selectorText === `#${animationId} path`
          );

          if (animationRuleIndex !== -1) {
            sheet.deleteRule(animationRuleIndex);
          }
        }
      } catch (err) {
        // eslint-disable-next-line
        console.warn(
          `There's been a problem with deleting a CSSRule, please report that issue in https://github.com/useAnimations/react-useanimations`,
          err
        );
      }
      window.requestAnimationFrame(() => {
        if (strokeColor || fillColor || pathCss) {
          try {
            const css = `#${animationId} path { ${strokeColor ? `stroke: ${strokeColor};` : ''}  ${
              fillColor ? `fill: ${fillColor};` : ''
            } ${pathCss || ''}}`;
            let sheetEl: any = document.getElementById('useAnimationsSheet');
    
            // STYLESHEET HASN'T BEEN CREATED YET
            if (!sheetEl) {
              sheetEl = document.createElement('style');
              sheetEl.setAttribute('id', 'useAnimationsSheet');
              sheetEl.appendChild(document.createTextNode(''));
              document.head.appendChild(sheetEl);
            }
    
            const sheet = sheetEl ? sheetEl.sheet || sheetEl.styleSheet : null;
            sheet.insertRule(css);
          } catch (err) {
            // eslint-disable-next-line
            console.warn(
              `There's been a problem with deleting a CSSRule, please report that issue in https://github.com/useAnimations/react-useanimations`,
              err
            );
          }
        }
      })
    }, {
      deep: true,
      immediate: true
    })


    watch([() => animation.value, () => reverse], ([animation]) => {
       // eslint-disable-next-line
      const curEvents = animation
      ? getEvents({
          animation: animation,
          reverse,
          //@ts-ignore
          animEffect: animEffect || getEffect(animationKey),
        })
        : undefined;
        
      // console.log('getEffect(animationKey): ', getEffect(animationKey));
      // console.log('curEvents: ', curEvents)
      // console.log('animEffect: ', animEffect)
    
      if (curEvents) {
        events.value = curEvents
      }
    })

    watch([() => animation.value, () => speed], () => {
      if (animation.value) {
        //@ts-ignore
        animation.value?.setSpeed(speed);
      }
    })

    const eventProps = computed(() => {
      return {
        ...events.value,
        onClick: (e: Event) => {
          if (onClick) onClick(e, unref(animation));
          if (events.value && 'onClick' in unref(events)) events.value.onClick();
        },
      }
    })

    const animationProps = computed(() => {
      return {
        ref: refCur,
        ...other,
        style: defaultStyles,
        //@ts-check
        class: `'useAnimation-inner useAnimation-${animationKey}`
      }
    })
    

    return () => {
      return render ? render(eventProps.value, animationProps.value) : h('div', { ...eventProps.value, ...animationProps.value });
    }
  }
})

export default UseAnimations