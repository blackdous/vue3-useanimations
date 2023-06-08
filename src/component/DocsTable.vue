<template>
  <table>
    <thead>
      <tr>
        <th>属性</th>
        <th>类型</th>
        <th>默认值</th>
        <th>可选值</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>animation</td>
        <td>animation file</td>
        <td>-</td>
        <td>-</td>
        <td>lottie 动画json 文件</td>
      </tr>
      <tr>
        <td>size</td>
        <td>number</td>
        <td>24</td>
        <td>-</td>
        <td>当前icon 大小</td>
      </tr>
      <tr>
        <td>strokeColor</td>
        <td><code>'inherit'</code></td>
        <td>-</td>
        <td>-</td>
        <td>svg stroke color 属性</td>
      </tr>
      <tr>
        <td>fillColor</td>
        <td>boolean</td>
        <td>false</td>
        <td>-</td>
        <td>svg fill color 属性</td>
      </tr>
      <tr>
        <td>wrapperStyle</td>
        <td>object</td>
        <td>-</td>
        <td>-</td>
        <td>外层div style 属性</td>
      </tr>
      <tr>
        <td>pathCss</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>reverse</td>
        <td>boolean</td>
        <td>false</td>
        <td>-</td>
        <td>是否翻转播放动画</td>
      </tr>
      <tr>
        <td>autoplay</td>
        <td>boolean</td>
        <td>false</td>
        <td>-</td>
        <td>是否自动播放</td>
      </tr>
      <tr>
        <td>loop</td>
        <td>boolean</td>
        <td>false</td>
        <td>-</td>
        <td>是否循环播放</td>
      </tr>
      <tr>
        <td>options</td>
        <td>object</td>
        <td>-</td>
        <td>-</td>
        <td>其他配置项，可以参考 <code>lottie-web</code> 文档</td>
      </tr>
      <tr>
        <td>speed</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
        <td>动画速度</td>
      </tr>
      <tr>
        <td>effectType</td>
        <td>string</td>
        <td>-</td>
        <td>
          <code
            >'CLICK_PLAY_AND_SEGMENTS' 'CLICK_PLAY' 'HOVER_PLAY_AND_STOP'
            'HOVER_PLAY_AND_BACKWARDS' 'CLICK_PLAY_AND_BACKWARDS'</code
          >
        </td>
        <td>触发动画的方式</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
table {
  display: block;
  border-collapse: collapse;
  margin: 20px 0;
  overflow-x: auto;
}
tr {
  border-top: 1px solid rgba(0, 0, 0, 0.29);
  transition: background-color 0.5s;
}
th {
  font-size: 16px;
  font-weight: 600;
  background-color: #f9f9f9;
}
th, td {
  border: 1px solid rgba(0, 0, 0, 0.29);
  padding: 12px 16px;
}
</style>