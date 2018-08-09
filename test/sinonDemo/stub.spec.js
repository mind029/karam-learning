describe('Sinon.js stub 函数 ', () => {
  describe('# 用法1：替换对象的方法', () => {
    let stub
    let res
    // 全局
    let User = {
      name: 'mind',
      saiHi (val) {
        console.log('i am ', this.name, val)
        return val
      }
    }

    before(() => {
      stub = sinon.stub(User, 'saiHi')
      // 调用一次
      res = User.saiHi(123)
    })

    // 清除替换
    after(() => {
      stub.restore()
    })

    it(' User.saiHi 函数被调用过 ', () => {
      expect(stub.called).to.be.true
    })

    it(' User.saiHi 返回值 是 undefined ', () => {
      console.log('res', res)
      expect(res).to.be.undefined
    })
  })

  describe('# 用法2：替换方法并且返回自定义值', () => {
    // 测试对象
    let stub
    let result
    let User = {
      name: 'mind',
      sayHi (val) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({id: 1, name: '测试的'})
          }, 500)
        })
      }
    }

    before(async () => {
      // 替换返回值
      stub = sinon.stub(User, 'sayHi').resolves({id: 2, name: 'mind'})
      result = await User.sayHi()
    })

    after(() => {
      stub.restore()
    })

    it(` 返回值将会是 {id: 2, name: 'mind'}  `, async () => {
      console.log('result', result)
      expect(result).to.deep.equal({id: 2, name: 'mind'})
    })
  })
})
