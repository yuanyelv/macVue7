/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-09 11:37:29
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-09 14:53:09
 * @FilePath: /vue7/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslint()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
