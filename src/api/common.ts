/*
 * @Author: yuanyelv 287142032@qq.com
 * @Date: 2022-06-09 15:27:46
 * @LastEditors: yuanyelv 287142032@qq.com
 * @LastEditTime: 2022-06-09 15:29:47
 * @FilePath: /vue7/src/api/common.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import request from '@/utils/request'

export const getLoginInfo = () => {
  return request({
    method: 'GET',
    url: 'login/info'
  })
}
