<template>
  <my-slot :showBgColor="false" :showTopLine="false">
    <section class="container py-5">
      <b-row>
        <b-col class="text-center mb-3 wow bounceInDown item" v-for="(item, index) of list" :key="index"
               :data-wow-delay="(index * 0.2) + 's'" md="3">

          <div class="left-box">
            <b-img :src="item.icon" style="width: 60px;height: 60px"/>
          </div>

          <div class="right-box">
            <span class="title">{{item.title}}</span>
            <span class="sub-title">{{item.subtitle}}</span>
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
            icon: require('~/static/img/common/one.png'),
            title: '价格无忧',
            subtitle: '24小时价格保护'
          },
          {
            icon: require('~/static/img/common/two.png'),
            title: '极速返款',
            subtitle: '检测后两小时内返款'
          },
          {
            icon: require('~/static/img/common/three.png'),
            title: '优质服务',
            subtitle: '提供专业回收服务'
          },
          {
            icon: require('~/static/img/common/four.png'),
            title: '信誉保证',
            subtitle: '专业服务值得信赖'
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

      padding-top: 8%;
    }

    .right-box {
      padding-top: 20px;

      span {
        display: block;
        margin-left:15px;
      }

      .title {
        text-align: left;
        color: rgb(43, 43, 43);
        line-height: 35px;
        font-size: 18px;


      }

      .sub-title {
        text-align: left;
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
