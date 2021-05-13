<template>
  <b-carousel v-model="slide" fade indicators background="#ababab"
              style="text-shadow: 1px 1px 2px #333; background: #ccc">
    <b-img fluid
           :src="size=='big' ? url : ''"
           alt="banner"/>
  </b-carousel>
</template>

<script>
  if (process.browser) { // 在这里根据环境引入wow.js
    var {WOW} = require('wowjs')
  }

  export default {
    name: 'custom-carousel',
    props: {
      size: {
        type: String,
        default: ''
      },
      url: {   //动态传入图片url
        type: String,
        default: ''
      }
    },
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    mounted() {
      if (process.browser) {  // 在页面mounted生命周期里面 根据环境实例化WOW
        new WOW({}).init()
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.slide = slide
        this.sliding = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .carousel .mask {
    position: absolute;
    top: 0;
    right: 15%;
    bottom: 0;
    left: 15%;
    color: #fff;
    font-size: 20px;
    z-index: 9;

    .content {
      position: absolute;
      right: 8%;
      top: 50%;
      width: 50%;
      transform: translateY(-50%);
      text-align: right;

      .title {
        font-size: 45px;
        color: #13d0b0;
        letter-spacing: 8px;
        font-family: "Segoe UI", "Lucida Grande", Helvetica, Arial, "Microsoft YaHei", FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Roboto, Arial, sans-serif;
      }

      .desc {
        font-size: 24px;
        font-weight: lighter;
        letter-spacing: 3px;
      }

      .line {
        // display: inline-block;
        // width: 100px;
        // height: 2px;
        // margin-top: 20px;
        font-size: 18px;
        font-weight: lighter;
        opacity: 0.9;
        // background: #fff;
      }
    }

    .content2 {
      left: 8%;
      text-align: left;
    }
  }

  @media screen and (max-width: 1400px) {
    .carousel .mask {
      .content {
        .title {
          font-size: 32px;
        }

        .desc {
          font-size: 18px;
        }

        .line {
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .carousel .mask {
      .content {
        .title {
          font-size: 34px;
        }

        .desc {
          font-size: 16px;
        }

        .line {
          font-size: 14px;
        }
      }
    }
  }

  @media screen and (max-width: 992px) {
    .carousel .mask {
      .content {
        .title {
          font-size: 26px;
        }

        .desc {
          font-size: 14px;
        }

        .line {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .mask2 {
      left: 0 !important;
    }
    .carousel .mask {
      right: 0;

      .content {
        top: 55%;
        width: 70%;

        .title {
          font-size: 26px;
          opacity: 0.8;
          letter-spacing: 2px;
        }

        .desc {
          font-size: 14px;
          letter-spacing: 1px;
        }

        .line {
          // width: 50px;
          // height: 1px;
          margin-top: 0;
        }
      }

      // .content2 {
      //   top: 30%;
      // }
    }
  }
</style>
