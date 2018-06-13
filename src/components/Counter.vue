<template>
<div>
  <div class="show-count">{{ count }}</div>
  <button @click="increment">Increment</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>
