<script>
  export default {
    name: 'liaotian',
    components: {},
    mounted () {
      let val = 0
      let loopSpeak = setInterval(() => {
        let content = document.getElementById('content')
        content.scrollTop = content.scrollHeight - document.documentElement.clientHeight + 100
        if (val === this.data.length) {
          clearInterval(loopSpeak)
        } else {
          this.records.push(this.data[val])
          val += 1
        }
      }, 1000)
    },
    data () {
      this.data = [{
        type: 'robot',
        content: '如果我和你妈要是掉河里了，你先救谁？'
      }, {
        type: 'user',
        content: '掉那条河里了？'
      }, {
        type: 'robot',
        content: '我也不知道哪条河。'
      }, {
        type: 'user',
        content: '不知道不行啊，你得告诉我你们掉哪条河里了，我才能救你们呀，对不对！不知道不行啊，你得告诉我你们掉哪条河里了，我才能救你们呀，对不对！'
      }, {
        type: 'robot',
        content: '我是说如果要是掉河里了！'
      }, {
        type: 'user',
        content: '如果掉进河里了跟我有什么关系，我又不认识如果。'
      }, {
        type: 'robot',
        content: '不是，我是说假如。'
      }, {
        type: 'user',
        content: '那假如我也不认识啊！'
      }, {
        type: 'robot',
        content: '不是我就是打个比方。'
      }, {
        type: 'user',
        content: '那比方我认识，比方是我朋友，可你为什么要打他呢？你为什么这么粗鲁。'
      }]
      return {
        records: []
      }
    },
    methods: {}
  }
</script>

<template>
  <div class="container">
    <div class="route">
      <router-link :to="{name: 'lbc'}">lbc</router-link>
      <router-link :to="{name: 'caowei'}">caowei</router-link>
      <router-view></router-view>
    </div>
  
    <div id="liaotian" class='liaotian'>
      <div class="title">
        对话记录
      </div>
      <ul id="content">
        <li v-for="record in records" :key="record.content" :style="{flexDirection:record.type=== 'user' ? 'row-reverse' : 'row'}">
          <div class="touxiang">
            <img v-if="record.type === 'robot'" src="../../assets/user.jpeg">
            <img v-else src="../../assets/robot.jpeg" alt="">
          </div>
          <div class="content">{{ record.content }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang='scss'>
  .container {
    text-align: right;
    .route {
      text-align: left;
    }
  }
  
  .liaotian {
    width: 50%;
    // overflow: auto;
    min-height: 100vh;
    background: lightblue;
    display: inline-block;
    .title {
      height: 50px;
      line-height: 50px;
      width: 100%;
      text-align: center;
    }
    #content {
      list-style-type: none;
      height: calc(100vh - 50px);
      margin-top: 50px;
      margin: 0;
      padding: 0;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      li {
        display: flex;
        min-height: 60px;
        overflow: auto;
        padding: 5px;
        margin-bottom: 10px;
        text-align: left;
        .touxiang,
        .content {
          float: left;
          margin: 0 10px;
          background: lightgreen;
        }
        .touxiang {
          width: 60px;
          height: 60px;
          border-radius: 30px;
          text-align: center;
          overflow: hidden;
          img {
            width: 60px;
            height: 60px;
          }
        }
        .content {
          max-width: 50%;
          min-height: 30px;
          padding: 10px;
          border-radius: 8px;
          white-space: normal;
          word-break: break-all;
          word-wrap: break-word;
        }
      }
    }
  }
</style>
