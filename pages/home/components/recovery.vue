<template>
  <my-slot :showBgColor="false" :showTopLine="false" class="my-slot">
    <b-row style="display: flex;margin-top: -40px;margin-bottom:40px;overflow: hidden">
      <div style="flex: 1">
        <Title :title="title" :englishTitle="englishTitle"/>
      </div>
      <div class="getmore" @click="NavRecoveryConsult">了解更多>></div>
    </b-row>
    <b-row class="mx-0" style="position: relative;bottom:-60px">
      <b-col lg="3" md="6" sm="12" v-for="(item, ind) of productList" :key="ind" class="wow fadeInUp my-img-box"
             :data-wow-delay="(0.2 * ind) + 's'">
        <b-card-img class="w-61 mx-auto d-block rounded thumbnail my-img" height="275" :src="item.icon"></b-card-img>
        <div class="text-box">
          <div class="text-title" @click="NavRecoveryTrade">{{item.title}}</div>
          <div class="text-desc" @click="NavRecoveryTrade">{{item.desc}}</div>
        </div>
      </b-col>
    </b-row>
  </my-slot>
</template>

<script>
  import MySlot from '@/components/slot/index';
  import Title from '@/components/common/title';

  export default {
    components: {
      MySlot, Title
    },
    data() {
      return {
        productList: [
          {
            id: 1,
            icon: require('~/static/img/business/business01.jpg'),
            title: '废弃手机',
            desc: '以旧换新'
          },
          {
            id: 2,
            icon: require('~/static/img/business/business02.jpg'),
            title: '废弃家电',
            desc: '以旧换新'
          },
          {
            id: 3,
            icon: require('~/static/img/business/business03.jpg'),
            title: '常用家电',
            desc: '补交差额以旧换新'
          },
          {
            id: 4,
            icon: require('~/static/img/business/business03.jpg'),
            title: '家用电器',
            desc: '补交差额以旧换新'
          }
        ],
        title: '环保回收',
        englishTitle: 'RECOVERY '
      }
    },
    methods: {
      /**
       * TODO 导航到环保咨询
       * @constructor
       */
      NavRecoveryConsult() {
        this.$route.push({path: ''});
      },
      /**
       * TODO 导航到环保交易
       * @constructor
       */
      NavRecoveryTrade() {
        this.$route.push({path: ''});
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .my-slot {
    background-image: linear-gradient(to top, #4f6f54 50%, #f5f8fb 0);
    height: 534px;

    .my-img-box {
      background-color: #fff;
      margin-bottom: -20px;

      .my-img {
        margin-top: -25px;
        margin-bottom: 15px;
      }
    }

    .card {
      border: none;
    }

    .getmore {
      flex: 1;
      color: rgb(43, 43, 43);
      font-size: 16px;
      text-align: right;
    }

    .getmore:hover {
      cursor: pointer;
    }

    .text-box {
      position: absolute;
      top: 1px;
      z-index: 2;
      font-size: 18px;
      color: #fff;
      top: 45%;
      width: 100%;
      text-align: center;
      overflow: hidden;

      .text-title:hover {
        cursor: pointer;
      }

      .text-desc:hover {
        cursor: pointer;
      }


    }

    .card:hover {
      // background: #F1F1F1;
      box-shadow: 0 0 10px #ccc;
    }

    .card-body-text {
      max-height: 102px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }

  }


</style>
