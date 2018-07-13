<template>
  <div>
    {{ count }}
    <button @click="increment">Increment</button>
    <div>
      <foo :msg="msg"></foo>
    </div>
  </div>
</template>

<script>
import Foo from '@/components/Foo'
export default {
  data () {
    return {
      count: 0,
      msg: 'hello mind'
    }
  },

  methods: {
    increment () {
      this.count++
    }
  },
  components: {
    Foo
  }
}
</script>
<style lang="less">
@import './test.less';
</style>
