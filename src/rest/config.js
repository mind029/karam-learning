/**
 * rest 请求配置
 */
import ajax from '../common/ajax'
export default {
  User: {
    list: ajax.query('/users')
  }
}
