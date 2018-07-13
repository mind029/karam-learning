import { expect } from 'chai'
import { mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

describe('# mount 使用', () => {
  it('Without options: ', () => {
    const wrapper = mount(Foo)
    // 如果没有传递参数，则为undefined
    expect(wrapper.props().msg).equal(undefined)
    // 组件渲染的内容页为空。
    expect(wrapper.text()).equal('')
  })

  it('With Vue options：，传递Vue选项', () => {
    const msg = 'hello World'
    const wrapper = mount(Foo, {
      propsData: {
        msg: msg
      }
    })
    expect(wrapper.props().msg).equal(msg)
  })

  // 直接得到渲染后的html。
  it('Attach to DOM，直接渲染为dom', () => {
    const wrapper = mount(Foo, {
      attachToDocument: true
    })
    expect(wrapper.contains('h2')).equal(true)
  })

  it('Default and named slots ，默认和命名插槽', () => {

  })
})
