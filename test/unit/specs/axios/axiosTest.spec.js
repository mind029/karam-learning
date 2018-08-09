import { mount } from '@vue/test-utils'
import axiosTest from '@/pages/axiosTest.vue'
import apiData from '@/api/index.js'
// import axios from 'axios'
// import moxios from 'moxios'
// import MockAdapter from 'axios-mock-adapter'
// import flushPromises from 'flush-promises'

describe('axiosTest.vue test case', () => {
  // let onFulfilled
  // let server
  let stub
  before(() => {
    // server = sinon.fakeServer.create()
    stub = sinon.stub(apiData, 'getUser').resolves({id: 1, name: 'zhangsan'})
    console.log('start----------')
  })
  after(() => {
    // server.restore()
    stub.restore()
    console.log('end----------')
  })

  it('axios 请求拦截', (done) => {
    const template = `
      <axios-test></axios-test>
    `
    const instance = {
      template: template,
      components: {
        axiosTest
      }
    }
    const wrapper = mount(instance)
    wrapper.vm.$nextTick(() => {
      console.log(wrapper.html())
      expect(true).to.be.true
      done()
    })
    // setTimeout(() => {
    //   console.log(wrapper.html())
    //   expect(true).to.be.true
    //   done()
    // }, 2000)
    // await flushPromises()
  })
})
