import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

/**
 * shallowMount与mount一样，它创建一个Wrapper，其中包含已安装和渲染的Vue组件，但包含存根子组件
 * 介绍地址：https://vue-test-utils.vuejs.org/api/#shallowmount
 */

describe('# shallowMount 使用', () => {
  it('without opions，不带任何参数渲染一个组件', () => {
    const wrapper = shallowMount(Foo)
    // 如果没有传递参数，则为undefined
    expect(wrapper.props().msg).equal(undefined)
    // 组件渲染的内容页为空。
    expect(wrapper.text()).equal('')
  })

  it('With Vue options：，传递Vue选项', () => {
    const msg = 'mind'
    const wrapper = shallowMount(Foo, {
      propsData: {
        msg: msg
      }
    })
    expect(wrapper.props().msg).equal(msg)
  })

  // 直接得到渲染后的html。
  it('Attach to DOM，直接渲染为dom', () => {
    const wrapper = shallowMount(Foo, {
      attachToDocument: true
    })
    expect(wrapper.contains('h2')).equal(true)
  })

  it('Default and named slots ，默认和命名插槽', () => {

  })
})
