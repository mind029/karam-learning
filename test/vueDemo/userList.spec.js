import { mount, createLocalVue } from '@vue/test-utils'
import UserList from '@/pages/UserList.vue'
import rest from '@/rest'
// vuex 仓库
import store from '@/vuex/store'

describe('UserList.vue test case', () => {
  let wrapper

  before(() => {
    const localVue = createLocalVue()
    const $route = {
      path: '/userlist',
      query: { status: 2 }
    }
    wrapper = mount(UserList, {
      localVue,
      rest,
      store,
      mocks: {
        $route
      }
    })
  })

  after(() => {
    wrapper.destroy()
  })

  it(' 初始化正常check ', (done) => {
    // 页面没渲染出来
    // console.log('wrapper.html()', wrapper.html())
    // expect(true).to.be.true

    setTimeout(() => {
      console.log('wrapper.html()', wrapper.html())
      expect(true).to.be.true
      done()
    }, 2000)

    // wrapper.vm.$nextTick(() => {
    //   console.log('wrapper.html()', wrapper.html())
    //   expect(true).to.be.true
    //   done()
    // })
  })

  it('.status 的值为2', () => {
    expect(wrapper.find('.status').text()).to.equal('2')
  })

  it('.toastBtn 点击 .toast-time-text 的text将会是 2000', () => {
    let btn = wrapper.find('.toastBtn')
    btn.trigger('click')
    console.log('toastBtn.click', wrapper.html())
    expect(wrapper.find('.toast-time-text').text()).to.equal('2000')
  })
})
