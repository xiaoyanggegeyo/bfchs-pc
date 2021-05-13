<template>
  <div class="top-title-box">
    <span class="title">{{title}}</span>
    <span class="english-title">{{englishTitle}}</span>
  </div>
</template>

<script>
  export default {
    name: "title",
    props: {
      title: {
        type: String,
        default: ''
      },
      englishTitle: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
  .top-title-box {
    .title {
      font-size: 30px;
      color: rgb(43, 43, 43);
      margin-bottom: -30px;
    }
    .english-title {
      color: rgb(153, 153, 153);
    }
  }



</style>
