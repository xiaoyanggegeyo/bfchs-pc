<template>
  <my-slot :showBgColor="true" :showTopLine="false" style=" height: 334px;">
    <Title title="  多样回收 一站式服务" englishTitle="RECYCLING MODE" style="margin-bottom: 80px"/>
    <b-row class="mx-0">
      <b-col lg="4" md="6" sm="12" v-for="(item, ind) of productList" :key="ind" class="wow fadeInUp"
             :data-wow-delay="(0.2 * ind) + 's'">
        <b-card img-top class="my-2 my-card">
          <b-img :src="item.icon" rounded="circle" alt="Circle image" thumbnail
                 style="width: 100px;height: 100px;margin-top: -70px;margin-left: 100px"></b-img>
          <div class="text-box">
            <div class="text1">{{item.title}}</div>
            <div class="text2">{{item.desc}}</div>
            <div class="text3" @click="$router.push('/product')">立即咨询</div>
          </div>
        </b-card>
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
        title: '行业&解决方案',
        desc: '蚂蚁云是专注于“云计算和大数据领域”的大企业、大政务、整体解决方案提供商和专业技术服务商。',
        productList: [
          {
            id: 1,
            icon: require('~/static/img/business/b01.png'),
            title: '上门回收',
            desc: '是车就回收，买有要求，可以上门看车'
          },
          {
            id: 2,
            icon: require('~/static/img/business/b02.png'),
            title: '免费拖车',
            desc: '免费拖车，事故车僵尸车水淹车都可以进行托运'
          },
          {
            id: 3,
            icon: require('~/static/img/business/b03.png'),
            title: '包销货',
            desc: '免费的帮助客户销户无需去交管局处理'
          }
        ],
        mainProps: {blank: true, blankColor: '#777', width: 75, height: 75, class: 'm1'}   //原型图片配置
      }
    },
    //TODO 立即咨询
    nowConsult() {
      window.open("");
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .card {
    border: none;
  }

  .card:hover {
    // background: #F1F1F1;
    box-shadow: 0 0 10px #ccc;
  }

  .my-card {
    background-image: linear-gradient(to bottom, #4ab344 70%, #f5f8fb 0);
    height: 226px;
    width: 315px;

    .text-box {
      display: flex;
      flex-direction: column;
      height: 100%;

      div {
        padding: 0 70px;
        text-align: center;
      }

      .text1 {
        flex: 1;
        color: rgb(255, 255, 255);
        font-size: 20px;
        line-height: 40px;
      }

      .text2 {
        flex: 3;
        color: #ffffff;
        font-size: 14px;
      }

      .text3 {
        flex: 2;
        color: rgb(16, 24, 33);
        line-height: 40px;
        font-size: 16px;
        background-color: transparent;
      }
      .text3:hover{
        cursor: pointer;
        color: #4ab344;
      }
    }
  }

  .my-img {
    border-radius: 50%;
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
