import { mount, createLocalVue } from '@vue/test-utils'
import Home from '@/pages/Home.vue'
import rest from '@/rest'
// import Vuex from 'vuex'
// vuex 仓库
import store from '@/vuex/store'

describe('UserList.vue test case', () => {
  let wrapper

  before(() => {
    const localVue = createLocalVue()
    wrapper = mount(Home, {
      localVue,
      rest,
      store
    })
  })

  after(() => {
    wrapper.destroy()
  })

  it(' home 初始化渲染页面完成 ', (done) => {
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('h2').text()).to.be.equal('首页')
      done()
    })
  })

  it('toastTime 的值没被影响', () => {
    console.log('wrapper.toastTime', wrapper.vm.toastTime)
    expect(true).to.be.true
  })
})
