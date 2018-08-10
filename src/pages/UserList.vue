<template>
  <div>
    <h2>用户列表页面</h2>
    <div>
      <div>
        参数：{{JSON.stringify(params)}}
      </div>
      <div class="toast-time-wrap">
        toastTime：
        <span class="toast-time-text">{{toastTime}}</span>
        <button class="toastBtn" type="button" @click="changeToast">改变Toast</button>
      </div>
      <div class="status">{{params.status}}</div>
    </div>
    <ul class="user-list">
      <li v-for="user in userList" :key="user.id">
        {{user.id}}-{{user.first_name}} {{user.last_name}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      params: {
        page: 1,
        rows: 10,
        status: 1
      },
      userList: []
    }
  },
  mounted () {
    this.initData()
  },
  computed: {
    ...mapGetters(['toastTime'])
  },
  methods: {
    ...mapActions([
      'UPDATE_TOAST'
    ]),
    async initData () {
      this.params.status = +this.$route.query.status
      console.log('this.$route.query', this.$route.query)
      let result = await this.$rest.User.list(this.params)
      this.userList = result.data
    },
    changeToast () {
      this.UPDATE_TOAST({
        time: 2000,
        show: true,
        text: '这是text文字'
      })
    }
  }
}
</script>
