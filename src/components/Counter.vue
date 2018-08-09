<template>
  <div>
    {{ count }}
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {

  mounted () {
    console.log('mounted-----')
    this.getData((data) => {
      console.log('data---', data)
    })
  },

  data () {
    return {
      count: 0,
      msg: 'hello mind'
    }
  },

  methods: {
    getData (callback) {
      setTimeout(() => {
        let data = 123123
        callback(data)
      }, 500)
    },
    increment () {
      this.count++
    }
  }
}
</script>
<style lang="less">
</style>
