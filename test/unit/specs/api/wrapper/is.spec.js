import { mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'

// Assert Wrapper DOM节点或vm匹配选择器
describe('wrapper.is()', () => {
  // https://vue-test-utils.vuejs.org/api/wrapper/#is-selector
  it('wrapper.is() 判断', () => {
    const wrapper = mount(Foo)
    expect(wrapper.find('h2').is('h2')).to.be.true
    expect(wrapper.is('button')).to.not.be.true
  })
})
