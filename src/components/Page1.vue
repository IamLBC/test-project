<script>
import { mapState } from 'vuex'
export default {
  name: 'PAGE1',
  data () {
    return {
      value: ''
    }
  },
  computed: {
    ...mapState({
      count: 'count'
    })
  },
  methods: {
    testEventBus () {
      this.$router.push('HomePage')
      this.$eventBus.$emit('test','lbc')
    }
  },
  directives: {
    focus: {
      inserted (el) {
        el.focus()
      }
    }
  }
}
</script>

<template>
  <div class="page1">
    PAGE1{{this.$store.state.count}}
    <div>this is mapstate:{{this.count}}</div>
    <div style="width: 300px"><input v-focus v-model="value"></input></div>
    <el-button @click="testEventBus">click</el-button>
  </div>
</template>

<style lang="scss">

.page1 {
  background: yellow;
  height: 100%;
}

</style>
