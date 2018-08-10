<template>
  <div>
    <h2>首页</h2>
    <button type="button" @click="gotoUserList">访问用户列表</button>
  </div>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['toastTime'])
  },
  methods: {
    gotoUserList () {
      this.$router.push({path: '/userlist', query: { status: 2 }})
    }
  }
}
</script>
