<template>
  <div id="my-slot">
    <section class=" container py-5">
      <div class="top-text">RECYCLING DESIGN</div>
      <b-row>
        <b-col class="text-center mb-3 wow bounceInDown item" v-for="(item, index) of list" :key="index"
               style="margin: 0 auto"
               :data-wow-delay="(index * 0.2) + 's'" md="2">
          <div class="right-box">
            <span class="title" @click="NavByPath(item.path)">{{item.name}}</span>
          </div>
        </b-col>
      </b-row>
    </section>
  </div>
</template>

<script>
  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }

  import MySlot from '@/components/slot/index'

  export default {
    name: 'footer-nav',
    components: {
      MySlot
    },
    data() {
      return {
        list: [
          {
            name: '首页',
            path: '/'
          },
          {
            name: '公司介绍',
            path: '/about'
          },
          {
            name: '回收资讯',
            path: '/consult'
          },
          {
            name: '回收交易',
            path: '/deal'
          },
          {
            name: '联系我们',
            path: '/contact'
          }
        ]
      }
    },
    mounted() {
      if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({}).init()
      }
    },
    methods: {
      NavByPath(path) {
        this.$router.push({path: path});
      }
    }
  }
</script>

<style lang="scss" scoped>
  #my-slot {
    height: 147px;
    padding: -70px 0 !important;
  }

  .top-text {
    line-height: 50px;
    text-align: center;
    width: 100%;
    font-size: 26px;
    color: rgb(0, 0, 0);
  }

  .item {
    display: flex;

    .right-box {
      padding-top: 20px;

      span {
        display: block;
        text-align: center;
      }

      .title {
        color: rgb(43, 43, 43);
        line-height: 35px;
        font-size: 18px;
      }

      .title:hover {
        color: #4ab344;
        cursor: pointer;
      }

      .sub-title {
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
