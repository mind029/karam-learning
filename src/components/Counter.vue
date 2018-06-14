<template>
<div>
  <div class="show-count">{{ count }}</div>
  <button @click="increment">Increment</button>
  <button id="reverse-btn" @click="reverseFunc">reverseMsg</button>
  <div class="reverse-text">{{reverseMsg}}</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      reverseMsg: ''
    }
  },
  methods: {
    increment () {
      this.count++
    },
    reverseFunc () {
      this.reverseMsg = this.reverseStr(this.reverseMsg)
    },
    reverseStr (str) {
      return str.split('').reverse().join('')
    }
  }
}
</script>
