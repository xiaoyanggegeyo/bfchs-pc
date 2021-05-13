<template>
  <my-slot :showBgColor="true" :showTopLine="false" style=" height: 334px;">
    <Title title="多样化回收方式" englishTitle="RECYCLING MODE" style="margin-bottom: 80px"/>
    <b-row class="mx-0">
      <b-col lg="4" md="6" sm="12" v-for="(item, ind) of productList" :key="ind" class="wow fadeInUp"
             :data-wow-delay="(0.2 * ind) + 's'">
        <b-card img-top class="my-2 my-card">
          <b-img :src="item.icon" rounded="circle" alt="Circle image" thumbnail
                 style="width: 100px;height: 100px;margin-top: -70px;margin-left: 100px"></b-img>
          <div class="text-box">
            <div class="text1">上门回收</div>
            <div class="text2">交易无需预约，交通方便 完爆传统路边回收小店</div>
            <div class="text3" @click="this.nowConsult()">立即咨询</div>
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
            icon: require('~/static/img/business/business01.jpg'),
            title: '互联网+政务',
            desc: '江苏蚂蚁云以阿里、数梦工场为基础，将互联网的能力与政务进行创新融合，在流程优化的基础上，引入以资源集约共享、弹性伸缩、极致体验、敏捷支撑为特征的互联网技术，从而实现政务便民服务、政务管理与辅助决策以及产业支持等精细化的政务体系。'
          },
          {
            id: 2,
            icon: require('~/static/img/business/business02.jpg'),
            title: '互联网+企业',
            desc: '以卓越绩效管理为目标，引入全局的、整体的、一贯的管理理念，打造“产供销一体、管控衔接、高效协同、三流合一”的管理信息系统，在企业推行先进的管理理念，使采购、销售、生产、质量、财务、成本等业务整合贯通，协同运作，使企业管理更加透明化、精细化和规范化。'
          },
          {
            id: 3,
            icon: require('~/static/img/business/business03.jpg'),
            title: '智慧城市（城市治理）',
            desc: '通过政务外网打通各委办局网络，集成综治大联动、智慧交运、智慧公交、智慧水务等业务系统的整屏、高分、关联展示。感知城市状态，实现城市实时的数据采集与分析处理，让城市管理智慧化、精细化，为城市智慧化管理提供技术保障保障 城市重大活动安全，提升城市全方位掌控能力，提高应急事件决策效率，实现事前事中事后的全流程跟踪处理，防范于未然。'
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
