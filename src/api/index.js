import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://reqres.in'
})

export default {
  getUserList (params) {
    console.log('params', params)
    return instance.get('/api/users?page=1', {
      timeout: 10000
    })
  },
  getUser () {
    return instance.get('/api/users/2')
  }
}
