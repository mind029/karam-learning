/**
 * Mount处理任何有效的CSS选择器
 *  标签选择器（div，foo，bar）
 *  类选择器（.foo，.bar）
 *  属性选择器（[foo]，[foo =“bar”]）
 *  id选择器（#foo，＃bar）
 *  伪选择器（div：first-of-type）
 * 您也可以使用组合器：
 *  直接后代组合子（div> #bar> .foo）
 *  一般后代组合子（div #bar .foo）
 *  相邻的兄弟选择器（div + .foo）
 *  一般兄弟选择器（div~.foo）
 * https://vue-test-utils.vuejs.org/api/#selectors
 */

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'
import Counter from '@/Counter.vue'

describe('# wrapper 选择器使用', () => {
  it('判断组件', () => {
    const wrapper = shallowMount(Foo)
    expect(wrapper.is(Foo)).equal(true)
  })

  // 使用find选项对象，Vue Test Utils允许通过包装器组件上的组件名称选择元素。
  it('Find Option Object', () => {
    const counterWrapper = shallowMount(Counter)
    const fooWrapper = counterWrapper.find({ name: 'fooComponents' })
    expect(fooWrapper.is(Foo)).equal(true)
  })
})
