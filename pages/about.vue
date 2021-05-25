<template>
  <section>
    <!--    轮播图-->
    <carousel class="d-none d-md-block d-lg-block d-xl-block" size="big"
              :type="2"/>
    <div class="container py-5">
      <Title title="关于我们" englishTitle="ABOUT US" style="margin-bottom: 8%;margin-top: 5%"/>
      <b-row>
        <b-col cols="10" offset="1">
          <b-card no-body class="mb-5" v-for="(item, index) of productList" :key="index">
            <b-row class="content" no-gutters>
              <i class="top"></i>
              <i class="bottom"></i>
              <b-col md="5" :data-wow-delay="(0.2 * index) + 's'" :offset-md="index === 1 ? 1 : 0"
                     :order="index == 1 ? 1 : 0">
                <b-card-img :src="item.icon" height="300" fluid class="rounded-0 picture"
                            :class="{special: index == 1}"></b-card-img>
              </b-col>
              <b-col :data-wow-delay="(0.2 * index) + 's'" :offset-md="index === 1 ? 0 : 1" md="6"
                     :order="index == 1 ? 0 : 1">
                <b-card-body class="h-100 d-flex justify-content-center align-items-center flex-column text-center">
                  <b-card-text class="w-100">
                    贵阳专业收报废车中心：收报废车电话：15628008678刘先生 &nbsp&nbsp&nbsp&nbsp
                    &nbsp&nbsp
                    是交管局指定的报废车专业解体厂！专业从事老旧机动车，事故车的报废解体业务。可办理各单位个人及部队退役的报废汽车解体，负责办理正规的报废手续，以快捷便利的方式为你解决车辆报废过程中的困难，本中心实力雄厚拆解设备齐全，具有大批量拆解车辆的能力，且价格合理，因此与多家单位和个人建立了良好的业务关系，我们真诚地恭候广大企业和个人前来咨询洽谈，我们愿为您耐心热情的服务。
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <Recovery/>

<!--    <div class="container">-->
<!--      <Title title="常见问题" englishTitle="QUESTION" style="margin-bottom: 3%;margin-top: 5%"/>-->
<!--      <b-row style="margin-top: -6rem">-->
<!--        &lt;!&ndash;        列表&ndash;&gt;-->
<!--        <b-col>-->
<!--          <div class=" wow fadeInUp list-box" v-for="(item,index) in questionList" :key="index"-->
<!--               :style="index == newsList.length - 1 ? '' : 'border-bottom: 1px dotted #ccc;'"-->
<!--               :data-wow-delay="(0.3 * index) + 's'">-->
<!--            <div class="title" @click="showDeatil">{{item.title}}</div>-->
<!--            <div class="sub-title">{{item.desc}}</div>-->
<!--          </div>-->
<!--        </b-col>-->
<!--      </b-row>-->
<!--    </div>-->

    <ServerItem/>
  </section>
</template>

<script>
  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }
  import Title from '@/components/common/title';
  import ServerItem from '@/components/common/server-item';
  import Recovery from '@/pages/home/components/recovery';
  import Carousel from '@/components/index/custom-carousel';
  import CommonDetail from '@/components/common/common-detail';


  export default {
    name: 'about',
    components: {Title, Recovery, ServerItem, Carousel, CommonDetail},
    data() {
      return {
        productList: [
          {
            id: 1,
            icon: require('~/static/img/business/b04.png'),
            title: '互联网政务场为基网的务进行'
          }
        ],
        newsList: [
          {
            id: 1,
            icon: require('~/static/img/business/time.png'),
            title: '互联网政务',
            desc: '江务、政务管理与辅助决策以及产业支持等精细化的政务体系。'
          },
          {
            id: 2,
            icon: require('~/static/img/business/time.png'),
            title: '互联网企业',
            desc: '系统，在企业推行先进的管理理念，使采购、销售、生产、质量、财务、成本等业务整合贯通，协同运作，使企业管理更加透明化、精细化和规范化。'
          },
          {
            id: 3,
            icon: require('~/static/img/business/time.png'),
            title: '智慧城市（城市治理）',
            desc: '通理智慧化、精细化，为城市智慧化管理提供技术保障保障 城市重大活动安全，提升城市全方位掌控能力，提高应急事件决策效率，实现事前事中事后的全流程跟踪处理，防范于未然。'
          }
        ],
        questionList: [
          {
            id: 1,
            icon: require('~/static/img/business/time.png'),
            title: '互联网政务',
            desc: '江务、政务管理与辅助决测试支持等精细化的政务体系。'
          },
          {
            id: 2,
            icon: require('~/static/img/business/time.png'),
            title: '互联网企业',
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
      //常见问题详情
      showDeatil(item) {
        // this.$layer.iframe({
        //   content: {
        //     content: CommonDetail,
        //     parent: this,
        //     data: {
        //       detailsData: item
        //     }
        //   },
        //   area: ['80%', '80%'],
        //   title: item.title,
        //   cancel: () => {
        //
        //   }
        // });


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

    padding: 10% 0;
    height: 67px;

    .title {
      font-size: 16px;
      font-family: 微软雅黑;
      color: #333333;
      font-weight: bold;
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
      color: #666666;
      font-weight: normal;
      text-decoration: none;
      font-style: normal;
    }
  }

  .nav-box {
    padding-left: 5%;
    display: flex;
    width: 60%;

    .nav {
      text-align: center;
      width: 50%;
      height: 35px;
      line-height: 35px;
      margin-left: 5px;
      margin-right: 20px;
      padding-left: 10%;

    }

    .nav:hover {
      background-color: #4ab344;
      cursor: pointer;
      color: #fff;
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
