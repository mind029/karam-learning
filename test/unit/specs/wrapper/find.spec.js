import { mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'
import Counter from '@/Counter'

describe('wrapper.find()', () => {
  // https://vue-test-utils.vuejs.org/api/wrapper/#find-selector
  it('wrapper.find() 查找选择器', () => {
    const wrapper = mount(Counter)
    expect(wrapper.find('button').is('button')).to.be.true
  })

  it('wrapper.find() 查找组件', () => {
    const wrapper = mount(Counter)
    expect(wrapper.find(Foo).exists()).to.be.true
  })
})
