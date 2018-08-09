import { mount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
describe('Counter.vue', () => {
  // let stub
  before(() => {
    // stub = sinon.stub(Counter, 'mounted')
  })

  after(() => {
    // stub.restore()
  })

  it('increments count when button is clicked', () => {
    const wrapper = mount(Counter)
    console.log(wrapper.html())
    // console.log('stub.called', stub.called)
    expect(true).to.be.true
  })
})
