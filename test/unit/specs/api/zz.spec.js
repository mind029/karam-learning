const obj = {
  cus: {
    getList () {
      return 'list'
    }
  }
}

describe('多层级module', () => {
  it('it will be ok', () => {
    const stub = sinon.stub(obj.cus, 'getList').returns('new list')
    let rs = obj.cus.getList()
    obj.cus.getList()
    console.log('rs', rs, 'stub', stub.callCount)

    expect(true).to.be.true
  })
})
