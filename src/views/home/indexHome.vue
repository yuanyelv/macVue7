<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-09 13:07:05
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-09 15:14:11
 * @FilePath: /vue7/src/views/home/indexHome.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>首页</h1>
  <p>{{ $store.state.count }}</p>
  <p>{{ store.state.count }}</p>
</template>

<script lang="ts" setup>
import { useStore } from '../../store'
const store = useStore()
console.log(store.state.count)
</script>
<style lang="scss" scoped>
h1{
    color: $color;
}
</style>
