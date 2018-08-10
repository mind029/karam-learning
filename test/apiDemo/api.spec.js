// api配置
import rest from '@/rest'
import Ajv from 'ajv'
import userListRules from '@/schema/userList.json'
describe('api test', () => {
  it('获取用户列表 api 测试 /users ', async () => {
    let res = await rest.User.list({
      page: 1,
      rows: 10,
      status: 1
    })
    let ajv = new Ajv()
    const validateFunc = ajv.compile(userListRules)
    const valid = validateFunc(res)
    expect(valid).to.be.true
  })
})
