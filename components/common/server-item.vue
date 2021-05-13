<template>
  <my-slot :showBgColor="false" :showTopLine="false">
    <section class="container py-5">
      <b-row>
        <b-col class="text-center mb-3 wow bounceInDown item" v-for="(item, index) of list" :key="index"
               :data-wow-delay="(index * 0.2) + 's'" md="3">

          <div class="left-box">
            <b-img :src="item.icon" style="width: 80px;height: 80px"/>
          </div>

          <div class="right-box">
            <span class="title">优质服务</span>
            <span class="sub-title">副标题</span>
          </div>
        </b-col>
      </b-row>
    </section>
  </my-slot>
</template>

<script>
  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }

  import MySlot from '@/components/slot/index'

  export default {
    name: 'server-item',
    components: {
      MySlot
    },
    data() {
      return {
        list: [
          {
            icon: require('~/static/img/client/client04.png'),
            name: '江苏省公安厅'
          },
          {
            icon: require('~/static/img/client/client04.png'),
            name: '江苏省南京市建邺区政府'
          },
          {
            icon: require('~/static/img/client/client04.png'),
            name: '江苏省南京市溧水区政府'
          },
          {
            icon: require('~/static/img/client/client02.png'),
            name: '江苏省盐业集团'
          }
        ]
      }
    },
    mounted() {
      if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({}).init()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item {
    display: flex;

    img {
      transition: all 0.4s;
    }

    .left-box {


    }

    .right-box {
      /*display: flex;*/
      /*flex-direction: column;*/
      padding-top: 20px;


      span {
        display: block;
        text-align: center;
      }

      .title {
        /*flex: 2;*/
        color: rgb(43, 43, 43);
        line-height: 35px;
        font-size: 18px;


      }

      .sub-title {
        /*flex: 2;*/
        font-size: 14px;
        line-height: 14px;
        color: rgb(153, 153, 153);


      }

    }
  }

  .item:hover {
    img {
      transform: scale(1.1);
    }
  }
</style>
