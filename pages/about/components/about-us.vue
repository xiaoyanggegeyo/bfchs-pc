<template>
  <my-slot :title="title" :desc="desc" :showBgColor="true">
    <b-row class="mx-0">
      <b-col lg="4" md="6" sm="12" v-for="(item, ind) of productList" :key="ind" class="wow fadeInUp"
             :data-wow-delay="(0.2 * ind) + 's'">
        <b-card img-top class="my-2">
          <b-card-img class="w-75 mx-auto d-block rounded thumbnail " :src="item.icon"></b-card-img>
          <b-card-title class="w-75 mx-auto mt-2 text-truncate">{{item.title}}</b-card-title>
          <b-card-text class="w-75 mx-auto card-body-text text-muted">{{item.desc}}</b-card-text>
          <b-button variant="outline-info"
                    class="mx-auto d-block my-btn"
                    @click="$router.push('/business/' + item.id)"
          >了解更多
          </b-button>
        </b-card>
      </b-col>
    </b-row>
  </my-slot>
</template>

<script>
  import MySlot from '@/components/slot/index'

  export default {
    name: 'about-us',
    components: {
      MySlot
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
</style>
