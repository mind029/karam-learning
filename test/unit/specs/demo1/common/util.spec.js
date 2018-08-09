// 引用 util.js
import Util from '@/common/util'

describe('util.js 测试用例', () => {
  describe('Util.plus() 测试用例', () => {
    it('传入 一个参数，抛出错误，参数不够，抛出错误', () => {
      let isError = false
      try {
        Util.plus(1)
        isError = false
      } catch (error) {
        isError = true
      }
      expect(isError).to.be.true
    })
  })
})
