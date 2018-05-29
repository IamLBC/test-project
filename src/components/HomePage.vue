<script>
import {
  mapActions,
  mapMutations
} from 'vuex'

export default {
  name: 'HomePage',
  components: {
  },
  created () {
    this.get()
    this.$eventBus.$on('test', val => {
      console.log(val,'val')
      this.name = val
    })
  },
  data () {
    return {
      name: '111'
    }
  },
  methods: {
    test () {
      this.get()
    },
    ...mapActions({
      get: 'increment'
    }),
    backHome () {
      this.$router.push({path: 'HomePage'})
    }
  }
}
</script>

<template>
  <div class="HomePage">
    <div class="header">
      <el-button @click="backHome">首页</el-button>
      header{{ name }}
    </div>
    <div class="content">
      <ul class="nav">
        <li>
          <router-link to="Page1">自定义指定directives</router-link>
        </li>
        <li>
          <router-link to="Page2">PAGE2</router-link>
        </li>
        <li v-for="i in 11">{{ '路由'+i }}</li>
      </ul>
      <div class="routerView"><router-view></router-view></div>
    </div>
  </div>
</template>

<style lang="scss">
.HomePage {
  .header {
    background: red;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    color: rgba(255, 255, 255, 1)
  }
  .content {
    display: flex;
    height: 400px;
    .nav {
      width: 20%;
      height: 100%;
      list-style-type: none;
      padding: 0;
      background: lightblue;
      margin: 0;
      li {
        height: 30px;
        line-height: 30px;
        background: gray;
        border-bottom: 1px solid burlywood;
        a {
          text-decoration: none;
        }
      }
    }
    .routerView {
      width: 100%;
    }
  }
}

</style>
