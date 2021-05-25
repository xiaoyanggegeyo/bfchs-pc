<template>
  <section>
    <!--    轮播图-->
    <carousel class="d-none d-md-block d-lg-block d-xl-block" size="big"
              :type="3"/>

    <div class="container py-5">
      <Title title="回收动态" englishTitle="NEWS" style="margin-bottom: 8%;margin-top: 5%"/>
      <b-row>
        <b-col style="display: flex">
          <div v-for="(item,index) in companyList" :key="index" class="wow fadeInUp product-box"
               :data-wow-delay="(0.2 * index) + 's'">
            <b-img class="img" :src="item.icon"></b-img>
            <div class="text">{{item.title}}</div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <!--        列表-->
        <b-col>
          <div class=" wow fadeInUp list-box" v-for="(item,index) in newsList" :key="index"
               :style="index == 0 ? 'border-top: 1px solid #ccc;' : 'border-top: 1px dotted #ccc;'"
               :data-wow-delay="(0.3 * index) + 's'">
            <div class="left-box">
              <!--                            <b-img class="img" :src="item.icon"></b-img>-->
              <div class="day">{{getTimeByDate('dd',item.createtime)}}</div>
              <div class="year">{{getTimeByDate('YYYY-mm',item.createtime)}}</div>
            </div>

            <div class="right-box">
              <div class="title" @click="showDeatil(item)">{{item.title}}</div>
              <div class="sub-title">{{item.createtime}}</div>
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
  import newsDeatil from '@/components/common/common-detail.vue';

  export default {
    components: {Title, ServerItem, Carousel, newsDeatil},
    data() {
      return {
        companyList: [
          {
            id: 1,
            icon: require('~/static/img/business/tchs.png'),
            title: '拖车现场'
          },
          {
            id: 2,
            icon: require('~/static/img/business/esc.png'),
            title: '二手车回收'
          },
          {
            id: 3,
            icon: require('~/static/img/business/gdc.png'),
            title: '高端车（玛莎拉蒂 劳斯莱斯 宾利）'
          }
        ],
        newsList: []
      }
    },
    mounted() {
      if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({}).init()
      }
      this.getCompanyList();
    },
    methods: {
      getCompanyList() {
        this.$axios.post('/commom/getCompanyList').then(res => {
          this.newsList = res.data.data.list;
        })
      },
      /**
       * 获取时间片段 根据时间
       */
      getTimeByDate(flag, date) {
        var tempTime = '';
        if (date && date != null && date != '') {
          var tempDay = date;
          var day = new String(tempDay);
          var year = new Date(date);
          if (flag == 'dd') {
            var tempdate = new String(day.split('-')[2]);
            tempTime = tempdate.split(' ')[0]
          } else if (flag == 'YYYY-mm') {
            var month = year.getMonth() + 1;
            tempTime = year.getFullYear() + '-' + month;
          }
        }
        return tempTime;
      },
      //TODO 显示详情
      showDeatil(item) {
        // this.$layer.iframe({
        //   content: {
        //     content: newsDeatil,
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

    /*.img {*/
    /*  flex: 4;*/
    /*  width: 300px;*/
    /*  height: 200px;*/

    /*}*/
    .time-box {
      width: 84px;
      height: 84px;
      background-color: #cccccc;

    }

    .text {
      width: 100%;
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
      width: 88px;
      height: 88px;
      background-color: #f5f5f5;
      padding-top: .5rem;

      .day {
        text-align: center;
        font-size: 2rem;
      }

      .year {
        text-align: center;
      }

    }

    .right-box {
      flex: 5;
      padding-top: .8rem;
      padding-left: .8rem;

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
