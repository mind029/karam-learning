<template>
  <div>
    <h2 id="userMsg"  class="user-title acitve" data-time="2018-12-01">{{ msg }}</h2>
    <h3></h3>
  </div>
</template>

<script>
export default {
  name: 'fooComponents',
  props: {
    msg: {
      type: String
    }
  },
  data () {
    return {
      userName: 'mind'
    }
  },
  methods: {
    demo1 () {
      console.log('i am demo1 function')
    }
  }
}
</script>
