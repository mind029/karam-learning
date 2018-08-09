<template>
  <div>
    123
    <h2>{{user.id}}---{{user.name}}</h2>
  </div>
</template>
<script>
import apiData from '@/api/index.js'
export default {
  data () {
    return {
      user: {}
    }
  },
  mounted () {
    this.initData()
  },
  methods: {
    async initData () {
      let result = await apiData.getUser()
      this.user = result
    }
  }
}
</script>
