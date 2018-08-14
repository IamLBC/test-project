<script>
import { mapState } from 'vuex'
export default {
  name: 'PAGE1',
  data () {
    return {
      value: '',
      strNum: 0,
      arrNum: 0,
      zfaArray: [{
        name: '方案1',
        age: '',
        select: [{
          gongsiduan: 'lbc',
          yewuduan: '18',
          sex: 'man'
        }],
        select2: [{
          gongsiduan: 'cyy',
          yewuduan: '',
          sex: 'women'
        }]
      },{
        name: '方案2',
        age: '',
        select: [{
          gongsiduan: '',
          yewuduan: '49',
          sex: 'man'
        }],
        select2: [{
          gongsiduan: 'cyy',
          yewuduan: '',
          sex: 'women'
        }]
      }]
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
    },
    check () {
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
    <el-button @click="check">检查必填项</el-button>
  </div>
</template>

<style lang="scss">

.page1 {
  background: yellow;
  height: 100%;
}

</style>
