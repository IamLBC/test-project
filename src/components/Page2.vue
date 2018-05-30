<script>
// import {mapMutations} from 'vuex'
export default {
  name: 'Page2',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    temp () {
      this.$store.commit('increment', {
        str: 'ok success'
      })
    }
  }
}
</script>

<template>
  <div class="Page2">
    page2
    <el-button @click="temp">changeState</el-button>
  </div>
</template>

<style lang="scss">

.Page2 {
  height: 100%;
  background: blue;
}

</style>
