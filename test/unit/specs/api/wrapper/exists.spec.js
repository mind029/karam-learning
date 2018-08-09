import { mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'
import Counter from '@/Counter'

describe('wrapper.exists()', () => {
  // https://vue-test-utils.vuejs.org/api/wrapper/#exists
  it('wrapper.exists() 判断组件和子组件', () => {
    const wrapper = mount(Counter)
    expect(wrapper.exists()).to.be.true
    // 判断子组件
    expect(wrapper.find(Foo).exists()).to.be.true
  })

  it('wrapper.exists() 判断选择器', () => {
    const wrapper = mount(Counter)
    // 判断你选择器
    expect(wrapper.find('button').exists()).to.be.true
    // 判断选择器
    expect(wrapper.find('#userMsg').exists()).to.be.true
  })
})
