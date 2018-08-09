import { mount } from '@vue/test-utils'
// import Foo from '@/components/Foo.vue'
// import Counter from '@/Counter'

// 如果元素具有display：none或visibility：hidden style，则返回false。
// 这可用于断言组件被v-show隐藏
describe('wrapper.isVisible()', () => {
  // https://vue-test-utils.vuejs.org/api/wrapper/#exists
  it('wrapper.isVisible() 判断 display:none', () => {
    const canNotVisibleCpm = {
      template: `<div style="display:none;">
        <h2>我是隐藏的</h2>
      </div>`
    }
    const visibleWrapper = mount(canNotVisibleCpm)
    // 组件最上面一层为display:none则为false
    expect(visibleWrapper.isVisible()).to.not.be.true
  })

  it('wrapper.isVisible() 判断 v-show', () => {
    const canNotVisibleCpm = {
      template: `<div v-show="isShow">
        <h2>我是隐藏的</h2>
      </div>`,
      data () {
        return {
          isShow: false
        }
      }
    }
    const visibleWrapper = mount(canNotVisibleCpm)
    // 组件最上面一层为 v-show 为 false。则返回false 表示不可见
    expect(visibleWrapper.isVisible()).to.not.be.true
  })

  it('wrapper.isVisible() 判断 html 元素', () => {
    const visibleCpm = {
      template: `<div>
        <h2 v-show="isShow">我是隐藏的</h2>
        <h3>我是可见的</h3>
      </div>`,
      data () {
        return {
          isShow: false
        }
      }
    }
    const visibleWrapper = mount(visibleCpm)
    // 组件最上面一层为没有控制，则为true。显示的
    expect(visibleWrapper.isVisible()).to.be.true
    // 判断元素是否可见
    expect(visibleWrapper.find('h2').isVisible()).to.not.be.true
    expect(visibleWrapper.find('h3').isVisible()).to.be.true
  })
})
