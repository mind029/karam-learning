describe('sinon.spy', () => {

  it('我们可以像调用函数一样调用一个spy：var spy = sinon.spy();', () => {
    const spy = sinon.spy()
    spy('Hello', 'World')
    spy('2')
    console.log(spy.firstCall.args)
    console.log(spy.secondCall.args)
    expect(spy.firstCall.args).to.deep.equal(['Hello', 'World'])
  })

  it('var spy = sinon.spy(myFunc);', () => {
    function myFunc (params) {
      console.log(params)
    }
    var spy = sinon.spy(myFunc)
    spy('mind')
    expect(spy.calledOnce).to.be.true
    expect(spy.firstCall.args).to.deep.equal(['mind'])
  })

  it('使用 sinon.spy 来包装现有方法：var spy = sinon.spy(object, "method");', () => {
    const User = {
      name: 'mind',
      saiHi (time) {
        console.log('i am ', this.name, time)
      }
    }

    sinon.spy(User, 'saiHi')
    User.saiHi(Date.now())
    // then ：判断是否值调用了一次
    expect(User.saiHi.calledOnce).to.be.true
    console.log(User.saiHi.firstCall.args)
    // 清空数据
    User.saiHi.restore()
  })

  it('spy.returnValues', () => {
    function dealData () {
      return {
        id: 1,
        name: 'mind'
      }
    }

    const spyDealData = sinon.spy(dealData)
    dealData()
    console.log(spyDealData.returnValues)
  })
})
