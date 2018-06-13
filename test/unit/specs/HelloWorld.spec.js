import Counter from '@/components/Counter.vue'
import { mount } from '@vue/test-utils'
describe('# Counter.vue', () => {
  // Now mount the component and you have the wrapper
  it('# count初始值为0', () => {
    const wrapper = mount(Counter)
    const vm = wrapper.vm
    expect(vm.count).to.equal(0)
  })

  it('按钮点击之后，count和页面的值都 +1', () => {
    const wrapper = mount(Counter)
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).to.equal(1)
    expect(wrapper.find('.show-count').text()).contains('1')
  })
})
