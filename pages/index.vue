<template>
  <div>
    <!--    轮播图-->
    <carousel class="d-none d-md-block d-lg-block d-xl-block" style="height: 0; padding-bottom: 31.2%" size="big"/>
    <carousel class="d-block d-md-none d-lg-none d-xl-none" style="height: 0; padding-bottom: 120%" size="small"/>
    <!--    banner下面回收展示块-->
    <Exhibition/>
    <!--    环保回收模块-->
    <Recovery/>
    <!--    环保动态 和 全新交易-->
    <Dynamicdeal/>
    <!--    回收方式-->
    <RecoveryMethod style="margin-bottom: 5%"/>
    <!--    公用得展示项-->
    <ServerItem/>


<!--    <Product/>-->
  <!--    <Business/>-->
  <!--    <About/>-->
  <!--    <Partner/>-->
  <!--    <Client/>-->
  </div>
</template>

<script>
  import Carousel from '@/components/index/carousel'
  import Exhibition from '@/pages/home/components/exhibition';
  import Recovery from '@/pages/home/components/recovery';
  import Dynamicdeal from '@/pages/home/components/dynamicDeal';
  import RecoveryMethod from '@/pages/home/components/recovery-method';
  import ServerItem from '@/components/common/server-item';


  // import Product from '@/components/index/product'
  // import Business from '@/components/index/business'
  // import About from '@/components/index/about'
  // import Partner from '@/components/index/partner'
  // import Client from '@/components/index/client'

  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }

  export default {
    components: {
      Carousel,
      Exhibition,
      Recovery,
      Dynamicdeal,
      RecoveryMethod,
      ServerItem,


      // Product,
      // Business,
      // About,
      // Client,
      // Partner
    },
    mounted() {
      if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({}).init()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
