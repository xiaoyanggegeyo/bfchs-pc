<template>
  <div class="root">
    <div class="img-box">
      <img :src="detailsData.icon" alt="" class="img">
    </div>
    <div class="info-box">
      <div class="title">三星电视</div>
      <div class="sub-title">类型：电子产品</div>
      <div class="sub-title">材质：黄金</div>
      <div class="sub-title">颜色：黑色</div>
      <div class="sub-title">品牌：三星</div>
      <div class="sub-title">型号：DH34</div>
      <div class="sub-title">价格: <span style="color: #c30; font-size: 24px;">￥2010</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "product-detail",
    data() {
      return {}
    },
    props: {
      detailsData: {
        type: Object,
        default: function () {
          return null;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .root {
    width: 100%;
    height: 100%;
    display: flex;

    .img-box {
      flex: 1;
      width: 390px;
      height: 390px;
      padding-left: 10%;

      .img {
        margin-top: 15%;
        width: 330px;
        height: 232px;
      }
    }

    .info-box {
      flex: 1;
      margin-top: 5%;

      div {
        padding: 10px 5px;
      }

      .title {
        font-size: 20px;
        font-family: Microsoft Yahei;
        color: #474747;
        line-height: 28px;
        word-break: break-all;
        border-bottom: 1px solid #ccc;
        width: 88%;
      }

      .sub-title {
        color: #767676;
        font-size: 15px;
      }


    }

  }

</style>
