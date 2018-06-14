import HelloWorld from '@/components/HelloWorld.vue'
import { mount } from '@vue/test-utils'
describe('# HelloWorld.vue', () => {
  // Now mount the component and you have the wrapper
  it('# msg 初始值为 Welcome to Your Vue.js App', () => {
    const wrapper = mount(HelloWorld)
    const vm = wrapper.vm
    expect(vm.msg).to.equal('Welcome to Your Vue.js App')
  })
})
