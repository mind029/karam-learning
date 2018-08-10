import { mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'
import Counter from '@/Counter'

// Assert Wrapper不包含子节点。
describe('wrapper.isEmpty()', () => {
  // https://vue-test-utils.vuejs.org/api/wrapper/#exists
  it('wrapper.isEmpty() 判断组件是否为空', () => {
    const wrapper = mount(Counter)
    expect(wrapper.isEmpty()).to.not.be.true
  })

  it('wrapper.isEmpty() 判断 空组件', () => {
    const emptyCpm = {
      template: `<div></div>`
    }
    const emptyWrapper = mount(emptyCpm)
    expect(emptyWrapper.isEmpty()).to.be.true
  })

  it('wrapper.isEmpty() 是否元素为空', () => {
    const wrapper = mount(Foo)
    expect(wrapper.find('h3').isEmpty()).to.be.true
  })
})
