<!--
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-09 13:07:33
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-09 15:32:28
 * @FilePath: /vue7/src/views/login/indexLogin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template><h1>登录</h1></template>

<script lang="ts" setup>import { getLoginInfo } from '@/api/common'
import { onMounted } from 'vue'

onMounted(() => {
  getLoginInfo().then(res => {
    console.log(res)
  })
})
</script>
<style lang="scss" scoped></style>
