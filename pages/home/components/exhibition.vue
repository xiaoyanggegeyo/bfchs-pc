<template>
  <my-slot :title="title" :desc="desc" :showBgColor="false" :showTopLine="false">
    <b-row class="mx-0">
      <b-col lg="3" md="6" sm="12" v-for="(item, ind) of productList" :key="ind" class="wow fadeInUp"
             :data-wow-delay="(0.2 * ind) + 's'">
        <b-card img-top class="my-2">
          <b-card-img class="w-60 mx-auto d-block rounded thumbnail " :src="item.icon" style="width: 70px;height: 70px;margin-bottom: 20px"></b-card-img>
          <b-card-title class="w-75 mx-auto mt-2 text-capitalize my-title">{{item.title}}</b-card-title>
          <b-button variant="success"  class="mx-auto d-block my-consultBtn" @click="$router.push('/product')" style="margin-top: 20px">
            立即咨询
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </my-slot>
</template>

<script>
  import MySlot from '@/components/slot/index'

  export default {
    components: {
      MySlot
    },
    data() {
      return {
        title: '',
        desc: '',
        productList: [
          {
            id: 1,
            icon: require('~/static/img/home/qc.png'),
            title: '报废汽车',
          },
          {
            id: 2,
            icon: require('~/static/img/home/tt.png'),
            title: '废弃铜铁',
          },
          {
            id: 3,
            icon: require('~/static/img/home/gjhs.png'),
            title: '高价回收',
          },
          {
            id: 3,
            icon: require('~/static/img/home/tc.png'),
            title: '免费拖车',
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .card {
    border: none;
  }

  /*.card:hover {*/
  /*  // background: #F1F1F1;*/
  /*  box-shadow: 0 0 10px #ccc;*/
  /*}*/

  .my-title {
    text-align: center;
    color: rgb(43, 43, 43);
    font-size: 20px !important;
    background-color: transparent;
  }

  .card-body-text {
    max-height: 102px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
</style>
