// import flushPromises from 'flush-promises'

describe('mocha处理异步函数的几种方法', () => {
  describe('第一种 callback 的异步函数：在回调函数里面done ', (done) => {
    let User = {
      sayHi (callback) {
        setTimeout(() => {
          let val = 'mind'
          console.log('i am', val)
          callback(val)
        }, 1000)
      }
    }

    it(' 在回调函数里 调用 done 处理', (done) => {
      User.sayHi((val) => {
        expect(val).to.be.equal('mind')
        done()
      })
    })
  })

  describe('第二种 返回 Promise 的异步函数，通过 async/await，或者 flushPromises 处理', () => {
    let User = {
      sayHi () {
        return Promise.resolve({id: 1, name: 'mind'})
      }
    }

    it(' 通过 async/await 方式处理 ', async () => {
      let result = await User.sayHi()
      console.log('result', result)
      expect(result).to.deep.equal({id: 1, name: 'mind'})
    })

    it(' 通过 flushPromises 方式处理 ', async () => {
      expect(true).to.be.true
    })
  })
})
