<template>
  <my-slot :showBgColor="false" :showTopLine="false" class="my-slot">
    <b-row style="display: flex;margin-top: -40px;margin-bottom:40px;overflow: hidden">
      <div style="flex: 1">
        <Title :title="title" :englishTitle="englishTitle"/>
      </div>
      <div class="getmore" @click="$router.push('/technology')">了解更多>></div>
    </b-row>
    <b-row class="mx-0" style="position: relative;bottom:-60px">
      <b-col lg="3" md="6" sm="12" v-for="(item, ind) of productList" :key="ind" class="wow fadeInUp my-img-box"
             :data-wow-delay="(0.2 * ind) + 's'">
        <b-card-img class="w-61 mx-auto d-block rounded thumbnail my-img" height="275" :src="item.icon"
                    @click="$router.push('/technology')"></b-card-img>
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
            icon: require('~/static/img/business/01.png'),
            title: '报废车',
            desc: '库存车'
          },
          {
            id: 2,
            icon: require('~/static/img/business/02.png'),
            title: '僵尸车',
            desc: '闲置车'
          },
          {
            id: 3,
            icon: require('~/static/img/business/03.png'),
            title: '水淹车',
            desc: '事故车'
          },
          {
            id: 4,
            icon: require('~/static/img/business/04.png'),
            title: '报废客车公交车',
            desc: '工地车混泥土车大货车'
          }
        ],
        title: '高价回收',
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
       * TODO 导航到汽车交易
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

      .my-img:hover {
        cursor: pointer;
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
      top: -1.7rem;
      z-index: 2;
      font-size: 18px;
      color: #fff;
      width: 89.5%;
      height: 103%;
      padding-top: 42%;
      text-align: center;
      overflow: hidden;
      background-color: #000000;
      opacity: 0.7;
      border-radius: .5rem;

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
