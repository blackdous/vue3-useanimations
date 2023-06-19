# vue3-useanimations

vue3-useanimations is a collection of free animated open source icons for vue.js.

[![npm version](https://img.shields.io/npm/v/vue3-useanimations.svg?style=flat-square)](https://www.npmjs.com/package/vue3-useanimations) [![npm downloads](https://img.shields.io/npm/dm/vue3-useanimations.svg?style=flat-square)](https://www.npmjs.com/package/vue3-useanimations)

## Installation

Using Yarn:

```shell
yarn add vue3-useanimations
```

or using NPM:

```shell
npm install -S vue3-useanimations
```

## Usage

Basic usage

```javascript
import CreateApp from 'vue';
import UseAnimations from 'vue3-useanimations';
// EVERY ANIMATION NEEDS TO BE IMPORTED FIRST -> YOUR BUNDLE WILL INCLUDE ONLY WHAT IT NEEDS
import github from 'vue3-useanimations/dist/lib/github'

const App = () => <UseAnimations animation={github} />;

export default App;
```

Icons can be configured with inline props:

```javascript
<UseAnimations animation={github} size={56} wrapperStyle={{ padding: 100 }} />
```

These props are available:
| Prop           | Default      | Definition   |
| :------------- | :----------: | -----------: |
| animation   | / | animation file |
|  size | `24`   | animation size    |
|  strokeColor | `'inherit'`   | animation stroke color |
|  fillColor   | `''`          | animation fill color
|  wrapperStyle | `{}` | wrapper div styles |
|  pathCss | `''` | css string for the animation path element |
|  reverse | `false` | assing to `true` when eg. checkbox should be checked initally |
|  autoplay | `false`* | false except in animations like loading etc. |
|  loop | `false`* | false except in animations like loading etc. |
|  options | `{}` | provide any other custom options which will override the default ones |
|  speed | `1` | a number to determine the speed of lottie(1 is normal speed) |
|  effectType | - | `'CLICK_PLAY_AND_SEGMENTS' |  'CLICK_PLAY' | 'HOVER_PLAY_AND_STOP' | 'HOVER_PLAY_AND_BACKWARDS' | 'CLICK_PLAY_AND_BACKWARDS' ` |

<br />
Controlled checkbox example  

```js
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
import { UseAnimations } from 'vue3-useanimations'
import radioButton from 'vue3-useanimations/dist/lib/radioButton'

const checked = ref(false)

const handleClick = () => {
  checked.value = !checked.value
}
</script>

```

Animation wrapped in element (use render prop).

```javascript

<template>

  <UseAnimations
    :animation={heart}
    :size="60"
    @click="handleClick"
    :render="renderFunc"
  >
  </UseAnimations>
</template>

<script lang='ts' setup>
import { h } from 'vue'
import { UseAnimations } from 'vue3-useanimations'
import heart from 'vue3-useanimations/dist/lib/heart'

const renderFunc = (eventProps: any, animationProps: any) => {
  return h('button', {
    style: { padding: '20px' },
    type: 'button',
    ...eventProps
  }, h('div', { ...animationProps }))
}

const handleClick = () => {
  console.log('additional onClick cb is working');
}
</script>

```

 Note that `eventProps` consists of `onClick`, `mouseOver` and other DOM events which you probably want to assign to your wrapping element (e.g. Button) and `animationProps` consist of an actual animation which you should spread inside a simple `<div>`
  