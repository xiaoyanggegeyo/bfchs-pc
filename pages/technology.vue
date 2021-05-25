<template>
  <section class="wrapper" style="background-color:#ffffff;">
    <!--    轮播图-->
    <carousel class="d-none d-md-block d-lg-block d-xl-block"  size="big"
              :type="4"/>
    <!--    <carousel class="d-block d-md-none d-lg-none d-xl-none" style="height: 0; padding-bottom: 120%" size="small"/>-->
    <div class="my-container py-5">
      <Title title="汽车交易" englishTitle="TRANSACTION"/>
      <b-row class="mx-0" style="margin-top: 60px;margin-bottom: -80px;">
        <!--        <b-col lg="3" md="6" sm="12" order="1" order-md="0" class="mb-4 wow slideInLeft">-->
        <!--          <b-list-group style="width: 200px">-->
        <!--            <b-list-group-item class="bg-muted" v-for="(item, index) of tabList" :key="index" :active="active == index"-->
        <!--                               style="height: 80px;line-height: 65px;"-->
        <!--                               @click="handleTabClick(index)">{{item.title}}-->
        <!--            </b-list-group-item>-->
        <!--          </b-list-group>-->
        <!--        </b-col>-->

        <b-col>
          <b-card v-for="(item,index) in productList" class="mb-3 wow fadeInUp my-card"
                  :data-wow-delay="(index * 0.2) + 's'"
                  style="max-width: 20rem;display:inline-block;"
                  :key="index" @click="getProductDetail(item)">
            <div>
            </div>
            <b-img :src="item.picUrl" class="img"/>
            <div class="title">{{item.name}}</div>
            <div class="my-desc">￥{{item.subtitle}}</div>
          </b-card>
        </b-col>


      </b-row>
    </div>
    <ServerItem style="margin-bottom: -40px"/>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Title from '@/components/common/title';
  import ServerItem from '@/components/common/server-item';
  import Carousel from '@/components/index/custom-carousel';
  // import ProductDetail from '@/pages/technology/product-detail';
  import ExampleDeatile from '@/components/common/example-details.vue';

  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }

  export default {
    components: {Title, ServerItem, Carousel, ExampleDeatile},
    data() {
      return {
        active: null,
        list: [],
        imgList: [{src: require('~/static/img/product/coor.png')}, {src: require('~/static/img/product/phone.png')}, {src: require('~/static/img/product/dyj.png')}],
        tabList: [],
        productList: []
      }
    },
    watch: {
      subNavIndex(newVal, oldVal) {
        this.active = newVal
        this.getList()
      }
    },
    computed: {
      ...mapState(['subNavIndex']),
    },
    mounted() {
      this.active = this.subNavIndex
      this.getList();
      /**
       * 获取左侧导航列表
       */
      // this.getGoodsClassList();
      /**
       * 获取商品列表
       */
      this.getGoodsList();

    },
    methods: {
      // getGoodsClassList() {
      //   this.$axios.post('/commom/getGoodsClassList').then(res => {
      //     if (res.data.code == 200) {
      //       this.tabList = res.data.data.list;
      //     }
      //   })
      // },
      getGoodsList() {
        this.$axios.post("/commom/getGoodsList?pageNo=1&pageSize=100&classId=1").then(res => {
          this.productList = res.data.data.items;
        })
      },
      // 筛选列表
      getList() {
        switch (Number(this.active)) {
          case 0:
            this.list = this.productList;
            break;
          case 1:
            this.list = this.productList.slice(0, 2);
            break;
          case 2:
            this.list = this.productList.slice(2)
        }
        this.$nextTick(() => {
          if (process.browser) {
            new WOW({}).init()
          }
        })
      },
      // 点击筛选
      handleTabClick(index) {
        this.$store.commit('setSubNavIndex', index)
      },
      // 点击查看详情
      handleDetail(id) {
        this.$router.push(`/product/${id}`)
      },
      // getGoodsList() {
      //   this.$axios.post('/commom/getGoodsList?pageNo=1&pageSize=10&classId=4').then(res => {
      //
      //   })
      // },
      getProductDetail(item) {
        console.log(this.$layer)
        this.$layer.iframe({
          content: {
            content: ExampleDeatile,
            parent: this,
            data: {
              detailsData: item
            }
          },
          area: ['55%', '701px'],
          title: '交易详情',
          cancel: () => {

          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .my-container {
    padding-left: 22%;
  }

  .my-info {
    display: flex;
    flex-direction: column;

    .item-box {
      flex: 1;
      display: flex;

      p {
        flex: 3;
        font-size: 15px;
        color: rgb(102, 102, 102);
        line-height: 46px;

      }
    }

  }

  .my-card {
    .img {
      width: 250px;
      height: 150px;
      border-radius: .7rem;
    }

    /*.img:hover {*/
    /*  transition: all 3.2s;*/
    /*  transform: scale(1.15)*/
    /*}*/

    .title {
      color: #666666;
      font-size: 15px;
      line-height: 23px;
      text-align: center;
    }

    .my-desc {
      color: #e4393c;
      font-size: 15px;
      line-height: 23px;
      text-align: center;
    }
  }

  .my-card:hover {
    cursor: pointer;
  }

  .wrapper {
    background: #f2f2f2;
  }

  .card {
    border: none;
  }

  /deep/ .list-group-item {
    border-color: transparent;
    border-radius: 0;
  }

  /deep/ .list-group-item.active {
    background: $theme-color;
  }

  /deep/ .list-group-item:hover {
    cursor: pointer;
  }
</style>
