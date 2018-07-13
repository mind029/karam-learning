import { shallowMount, mount } from '@vue/test-utils'
import Foo from '@/components/Foo.vue'
import Counter from '@/Counter'

describe('wrapper对象和属性', () => {
  it('wrapper.vm，相当于vue中的this', () => {
    const wrapper = shallowMount(Foo)
    // wrapper.vm 相当于this
    expect(wrapper.vm.userName).to.equal('mind')
  })

  it('wrapper.methods: wrapper.attributes()，返回Wrapper DOM节点属性对象', () => {
    const wrapper = shallowMount(Foo)
    const h2Wrapper = wrapper.find('h2')
    // 获取某个dom 节点 的属性对象。{id: 'userMsg', data-time: '2018-12-01'}
    const h2Attributes = h2Wrapper.attributes()
    expect(h2Attributes.id).to.equal('userMsg')
  })

  it('wrapper.methods: wrapper.classes()，返回Wrapper DOM节点 class 样式数组', () => {
    const wrapper = shallowMount(Foo)
    const h2Wrapper = wrapper.find('h2')
    // 获取某个dom 节点 的属性对象。{id: 'userMsg', data-time: '2018-12-01'}
    const h2Classes = h2Wrapper.classes()
    // 有2个样式user-title acitve
    expect(h2Classes).to.has.lengthOf(2)
    // 判断是否相等
    expect(h2Classes).deep.equal(['user-title', 'acitve'])
  })

  it('wrapper.methods: wrapper.contains()，Assert Wrapper包含一个元素或组件匹配选择器。', () => {
    // https://vue-test-utils.vuejs.org/api/wrapper/#contains-selector
    const wrapper = mount(Counter)
    // 判断一个元素
    expect(wrapper.contains('h2')).to.be.true
    expect(wrapper.contains('h1')).to.not.be.true
    // 判断选择器
    expect(wrapper.contains('#userMsg')).to.be.true
    // 判断一个组件
    expect(wrapper.contains(Foo)).to.be.true
  })
})
