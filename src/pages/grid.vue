<script>
  export default {
    name: 'grid_layout',
    components: {
    },
    data () {
      return {
        colors: ['red','yellow','blue','green','gray']
      }
    },
    methods:{
    }
  }
</script>

<template>
 <div class='grid_layout'>
   <div :style="{background: item}" :class="'item'+(index+1)" v-for="(item,index) in colors" :key="item">{{ item }}</div>
 </div>
</template>

<style lang='scss'>
.grid_layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 150px 150px 150px;
  div {
    border: 2px solid white;
  }
  .item1 {
    grid-column: 1 / 6;
  }
  .item2 {
    grid-row: 2 / 6;
  }
  .item3 {
    grid-column: 2 / 6;
  }
  .item4 {
    grid-row: 3 / 6;
  }
  .item5 {
    grid-row: 3 / 6;
    grid-column: 3 / 6
  }
}
</style>
