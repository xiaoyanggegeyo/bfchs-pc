<template>
  <section class="wrapper" style="background-color:#fff;">
    <!--    轮播图-->
    <carousel class="d-none d-md-block d-lg-block d-xl-block" size="big"
              :type="5"/>
    <div class="container" style="margin-top: 5%">
      <Title title="联系我们" englishTitle="CONTACT US"/>
      <!--      地图-->
      <b-row style="padding-top: 4%;margin-top:4%;border-top: 1px solid #ccc; ">
        <b-col lg="6" class="mb-3" style="padding-left: 0">
          <iframe width='100%' height='300' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'
                  src='https://surl.amap.com'></iframe>
        </b-col>
        <b-col lg="6" class="d-none d-lg-block" style="display: flex; flex-direction: column;">
          <div class="item-box" style="flex: 1;display: flex;">
            <b-card-img :src=this.imgList[4].src style="width: 60px;height: 60px"></b-card-img>
            <div class="text-box">联系人： 贵州省贵阳市</div>
          </div>
          <div class="item-box" style="flex: 1;display: flex;">
            <b-card-img :src=this.imgList[0].src style="width: 60px;height: 60px"></b-card-img>
            <div class="text-box">公司地址： 贵州省贵阳市</div>
          </div>
          <div class="item-box" style="flex: 1;display: flex;">
            <b-card-img :src=this.imgList[1].src style="width: 60px;height: 60px"></b-card-img>
            <div class="text-box" style="">联系电话： 15208592811</div>
          </div>
          <div class="item-box" style="flex: 1;display: flex;">
            <b-card-img :src=this.imgList[2].src style="width: 60px;height: 60px"></b-card-img>
            <div class="text-box">联系邮箱：v185-7517-6400@15dwq.uu.me</div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="container" style="margin-top: 5%">
      <Title title="加我微信" englishTitle="WECHAT"/>
      <!--      地图-->
      <b-row style="padding-top: 4%;margin-top:4%;border-top: 1px solid #ccc; ">
        <b-card-img :src=this.imgList[3].src style="width: 20rem;height: 20rem"></b-card-img>
      </b-row>
      <ServerItem/>
    </div>

  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Title from '@/components/common/title';
  import ServerItem from '@/components/common/server-item';
  import Carousel from '@/components/index/custom-carousel';

  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }
  export default {
    components: {Title, ServerItem, Carousel},
    data() {
      return {
        active: null,
        imgList: [
          {src: require('~/static/img/product/coor.png')},
          {src: require('~/static/img/product/phone.png')},
          {src: require('~/static/img/product/dyj.png')},
          {src: require('~/static/img/product/wx.png')},
          {src: require('~/static/img/product/ren.png')}

        ],
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
      this.getList()
    },
    methods: {
      // 筛选列表
      getList() {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .item-box {
    flex: 1;

    .text-box {
      flex: 3;
      font-size: 15px;
      color: rgb(102, 102, 102);
      line-height: 5rem;
    }
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
