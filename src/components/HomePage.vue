<script>
import {
  mapState
} from 'vuex'

export default {
  name: 'HomePage',
  components: {
  },
  created () {
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
  },
  computed: {
    state () {
      return this.$store.state.count
    }
  }
}
</script>

<template>
  <div class="HomePage">
    <div class="header">
      eventBus:{{ name }},
      vuex state:{{ state }}
    </div>
    <div class="content">
      <ul class="nav">
        <li>
          <router-link to="Page1">自定义指定directives</router-link>
        </li>
        <li>
          <router-link to="Page2">PAGE2</router-link>
        </li>
        <li v-for="(item,index) in 11" :key="index">{{ '路由'+item }}</li>
      </ul>
      <div class="routerView"><router-view></router-view></div>
    </div>
  </div>
</template>

<style lang="scss">
.HomePage {
  
  .header {
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    text-align: center;

    background-image: url('../assets/recycled_texture_background_by_sandeep_m-d6aeau9_PZ9chud.jpg');
    background-size: 100% 100%;  
    -moz-background-size: 100% 100%;  
    -webkit-background-size: 100% 100%;
  }
  .content {
    display: flex;
    height: 403px;
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
        &:hover {
          background: red;
        }
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
