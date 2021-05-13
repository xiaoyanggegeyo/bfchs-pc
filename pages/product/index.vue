<template>
  <section class="py-5 wrapper">
    <div class="container">
      <Title title="联系我们" englishTitle="CONTACT US"/>
      <!--      地图-->
      <b-row style="padding-top: 4%;margin-top:4%;border-top: 1px solid #ccc; ">
        <b-col lg="6" class="mb-3" style="padding-left: 0">
          <iframe width='100%' height='300' frameborder='0' scrolling='no' marginheight='0' marginwidth='0'
                  src='https://surl.amap.com/4RbgAE1ncwv'></iframe>
        </b-col>
        <b-col lg="6" class="d-none d-lg-block" style="display: flex; flex-direction: column;">
          <div class="item-box" style="flex: 1">
            <b-card-img :src=this.imgList[0].src style="width: 60px;height: 60px"></b-card-img>
            <p>公司地址： 江苏省南京市鼓楼区广州路37号江苏科技大厦27F</p>
          </div>
          <div class="item-box" style="flex: 1">
            <b-card-img :src=this.imgList[1].src style="width: 60px;height: 60px"></b-card-img>
            <p>联系电话： 025-5180 2988</p>
          </div>
          <div class="item-box" style="flex: 1">
            <b-card-img :src=this.imgList[2].src style="width: 60px;height: 60px"></b-card-img>
            <p>传真电话：public@mayiyundt.com</p>
          </div>
        </b-col>
      </b-row>
      <ServerItem/>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import Title from '@/components/common/title';
  import ServerItem from '@/components/common/server-item';
  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }
  export default {
    components: {Title, ServerItem},
    data() {
      return {
        active: null,
        imgList: [{src: require('~/static/img/product/coor.png')}, {src: require('~/static/img/product/phone.png')}, {src: require('~/static/img/product/dyj.png')}],
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
