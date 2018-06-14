import chai, {expect} from 'chai'
import chaiAjv from 'chai-json-schema-ajv'
// 后端api
import dataApi from '../../../../src/api/data'
import dataSchema from '../../../../src/schema/schema'
// 让chai支持json-schema
chai.use(chaiAjv)

describe('接口测试', () => {
  describe('# /postsList 接口相关测试', async () => {
    let postListRes = await dataApi.postsList()

    it('# /postsList 状态码正常 为200 或 304', async function () {
      let status = !!((postListRes.status === 200 || postListRes.status === 304))
      expect(status).to.equal(true)
    })

    it('# /postList 接口响应内容符合要求', async () => {
      let response = postListRes.data
      expect(response).to.be.jsonSchema(dataSchema.postsList)
    })
  })

  describe('# /commentsList 接口相关测试', async () => {
    let commentsListRes = await dataApi.commentsList()

    it('# /commentsList 状态码正常 为200 或 304', async function () {
      let status = !!((commentsListRes.status === 200 || commentsListRes.status === 304))
      expect(status).to.equal(true)
    })

    it('# /commentsList 接口响应内容符合要求', async () => {
      let response = commentsListRes.data
      expect(response).to.be.jsonSchema(dataSchema.postsList)
    })
  })
})
