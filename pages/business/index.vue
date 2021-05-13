<template>
  <section>
    <!--    轮播图-->
    <carousel class="d-none d-md-block d-lg-block d-xl-block" style="height: 0; padding-bottom: 31.2%" size="big"
              :url="require('~/static/img/banner/banner01_big.jpg')"/>
    <!--    <carousel class="d-block d-md-none d-lg-none d-xl-none" style="height: 0; padding-bottom: 120%" size="small"/>-->


    <div class="container py-5">
      <Title title="回收咨询" englishTitle="NEWS" style="margin-bottom: 8%;margin-top: 5%"/>
      <b-row>


        <b-col style="display: flex">
          <div v-for="(item,index) in productList" :key="index" class="wow fadeInUp product-box"
               :data-wow-delay="(0.2 * index) + 's'">
            <b-img class="img" :src="item.icon"></b-img>
            <div class="text">{{item.title}}</div>
          </div>
        </b-col>

        <!--        <b-col cols="10" offset="1">-->
        <!--          <b-card no-body class="mb-5" v-for="(item, index) of productList" :key="index">-->
        <!--            <b-row class="content" no-gutters>-->
        <!--              <i class="top"></i>-->
        <!--              <i class="bottom"></i>-->
        <!--              <b-col md="5" :data-wow-delay="(0.2 * index) + 's'" :offset-md="index === 1 ? 1 : 0"-->
        <!--                     :order="index == 1 ? 1 : 0">-->
        <!--                <b-card-img :src="item.icon" height="300" fluid class="rounded-0 picture"-->
        <!--                            :class="{special: index == 1}"></b-card-img>-->
        <!--              </b-col>-->
        <!--              <b-col :data-wow-delay="(0.2 * index) + 's'" :offset-md="index === 1 ? 0 : 1" md="6"-->
        <!--                     :order="index == 1 ? 0 : 1">-->
        <!--                <b-card-body class="h-100 d-flex justify-content-center align-items-center flex-column text-center">-->
        <!--                  <b-card-title>{{item.title}}</b-card-title>-->
        <!--                  <b-card-text class="w-100">{{item.desc}}</b-card-text>-->
        <!--                  <b-button variant="outline-info" @click="$router.push('/business/'+item.id)">查看详情</b-button>-->
        <!--                </b-card-body>-->
        <!--              </b-col>-->
        <!--            </b-row>-->
        <!--          </b-card>-->
        <!--        </b-col>-->
      </b-row>
      <b-row>
        <!--        列表-->
        <b-col>
          <div class=" wow fadeInUp list-box" v-for="(item,index) in newsList" :key="index"
               :style="index == 0 ? 'border-top: 1px solid #ccc;' : 'border-top: 1px dotted #ccc;'"
               :data-wow-delay="(0.3 * index) + 's'">
            <div class="left-box">
              <b-img class="img" :src="item.icon"></b-img>
            </div>

            <div class="right-box">
              <div class="title" @click="showDeatil">{{item.title}}</div>
              <div class="sub-title">{{item.desc}}</div>
            </div>
          </div>
        </b-col>
      </b-row>
      <ServerItem/>
    </div>
  </section>
</template>

<script>
  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }
  import Title from '@/components/common/title';
  import ServerItem from '@/components/common/server-item';
  import Carousel from '@/components/index/custom-carousel';

  export default {
    components: {Title, ServerItem, Carousel},
    data() {
      return {
        productList: [
          {
            id: 1,
            icon: require('~/static/img/business/business01.jpg'),
            title: '互联网+政务场为基网的务进行'
          },
          {
            id: 2,
            icon: require('~/static/img/business/business02.jpg'),
            title: '互联网+企业场为力行'
          },
          {
            id: 3,
            icon: require('~/static/img/business/business03.jpg'),
            title: '智慧城市（，将互联网务进行'
          }
        ],
        newsList: [
          {
            id: 1,
            icon: require('~/static/img/business/time.png'),
            title: '互联网+政务',
            desc: '江务、政务管理与辅助决策以及产业支持等精细化的政务体系。'
          },
          {
            id: 2,
            icon: require('~/static/img/business/time.png'),
            title: '互联网+企业',
            desc: '系统，在企业推行先进的管理理念，使采购、销售、生产、质量、财务、成本等业务整合贯通，协同运作，使企业管理更加透明化、精细化和规范化。'
          },
          {
            id: 3,
            icon: require('~/static/img/business/time.png'),
            title: '智慧城市（城市治理）',
            desc: '通理智慧化、精细化，为城市智慧化管理提供技术保障保障 城市重大活动安全，提升城市全方位掌控能力，提高应急事件决策效率，实现事前事中事后的全流程跟踪处理，防范于未然。'
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
      //TODO 显示详情
      showDeatil() {

      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .product-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    display: inline-block;
    padding: 0 20px;

    .img {
      flex: 4;
      width: 300px;
      height: 200px;

    }

    .text {
      width: 300px;
      margin-top: 10px;
      flex: 1;
      color: #2B2B2B;
      font-size: 16px;
      text-align: center;

    }
  }

  .list-box {
    display: flex;
    margin-top: 5%;
    padding-top: 5%;

    .left-box {
      flex: 1;
      width: 48px;
      height: 48px;

      .img {

      }

    }

    .right-box {
      flex: 5;

      .title {
        font-size: 16px;
        font-family: 微软雅黑;
        color: #333333;
        font-weight: normal;
        text-decoration: none;
        font-style: normal;
      }

      .title:hover {
        color: #4ab344;
        cursor: pointer;
      }

      .sub-title {
        font-size: 14px;
        font-family: 微软雅黑;
        color: #797979;
        font-weight: normal;
        text-decoration: none;
        font-style: normal;

      }


    }
  }

  .card {
    border: 5px solid #e8e8e8;
    box-shadow: 3px 3px 12px #e8e8e8;
  }

  .card:hover {
    .picture {
      transform: translate(0, 0)
    }
  }

  .picture {
    object-fit: cover;
    transition: all 0.6s;
    transform: translate(-30px, -30px);

    &.special {
      transform: translate(30px, -30px)
    }
  }

  @media screen and (max-width: 992px) {
    .picture {
      transform: translate(0, 0) !important;
    }
    .card {
      border: none;
    }
    .top, .bottom {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .picture {
      height: 200px;
    }
  }

  .content {
    position: relative;

    .top {
      position: absolute;
      top: -5px;
      left: -5px;
      width: 0;
      height: 0;
      border-left: 5px solid $theme-color;
      border-top: 5px solid $theme-color;
      transition: all 0.6s;
    }

    .bottom {
      position: absolute;
      right: -5px;
      bottom: -5px;
      width: 0;
      height: 0;
      border-bottom: 5px solid $theme-color;
      border-right: 5px solid $theme-color;
      transition: all 0.6s;
    }
  }

  .content:hover {
    box-shadow: 3px 3px 12px $theme-color;

    .top, .bottom {
      width: 100%;
      height: 100%;
    }
  }
</style>
