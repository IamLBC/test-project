<script>
  export default {
    name: 'elementTable',
    data () {
      return {
        state4: '',
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
      }
    },
    methods: {
      test () {
      },
      loadAll () {
        return []
      },
      querySearchAsync (queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      },
      createStateFilter (queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect (item) {
        console.log(item)
      }
    },
    mounted () {
      this.restaurants = this.loadAll()
    }
  }
</script>

<template>
<div class="test">
  <el-button @click="test">click me</el-button>
    <el-autocomplete
    v-model="state4"
    popper-class="lbc"
    :props="{value: 'value',label: 'value',key: 'auto'}"
    :fetch-suggestions="querySearchAsync"
    placeholder="请输入内容"
    @select="handleSelect"></el-autocomplete>
  <el-scrollbar 
    tag="ul" 
    class="scroll" 
    wrap-class="el-autocomplete-suggestion__wrap"
    view-class="el-autocomplete-suggestion__list"
    viewStyle="color: blue">
    <li v-for="(item, index) in arr" :key="index">{{ item }}</li>
  </el-scrollbar>
</div>
</template>

<style lang='scss'>
.test {
  background: red;
  height:100vh;
  .scroll {
    height: 150px;
    // background: blue;
    width: 300px;
  }
}
</style>
