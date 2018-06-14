import Counter from '@/components/Counter.vue'
import { mount } from '@vue/test-utils'
describe('# Counter.vue', () => {
  // Now mount the component and you have the wrapper
  it('# count初始值为0', () => {
    const wrapper = mount(Counter)
    const vm = wrapper.vm
    expect(vm.count).to.equal(0)
  })

  it('# reverseStr 反转字符串', () => {
    const wrapper = mount(Counter)
    var str = '123'
    const vm = wrapper.vm
    // 传入正常的值能反转
    expect(vm.reverseStr(str)).to.equal('321')
  })

  it('# reverseFunc 触发反转字符串函数', () => {
    const wrapper = mount(Counter)
    // 更改data里面的值,测试反转功能是否正常
    wrapper.setData({ reverseMsg: 'hello' })
    const button = wrapper.find('#reverse-btn')
    button.trigger('click')
    expect(wrapper.find('.reverse-text').text()).to.equal('olleh')
  })
})
