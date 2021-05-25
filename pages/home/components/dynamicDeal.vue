<template>
  <my-slot :showBgColor="false" :showTopLine="false">
    <b-row class="mx-0">

      <b-col lg="7" md="12" sm="12" class="wow slideInLeft">
        <Title title="回收动态" englishTitle="NEWS"/>
        <b-img fluid :src="require('~/static/img/about/about02.png')"
               style="height: 130px;width: 600px;margin-top: 20px"></b-img>
        <div class="leftNewsBox">
          <div class="NewsItem " v-for="(item,index) in newsList" :key="index" @click="getNewsDeatil(item)"
               :style="index == newsList.length - 1 ? '' : 'border-bottom: 1px solid #dbeaef'">
            <span class="content">{{item.title}}</span>
            <span class="time">{{item.createtime}}</span>
          </div>
        </div>
      </b-col>

      <b-col lg="5" md="12" sm="12" class="wow slideInRight">
        <Title title="汽车交易" englishTitle="LATEST DEAL"/>
        <div class="rightProductBox">
          <div class="item" v-for="(item,index) in exampleList" :key="index" @click="getExampleDeatil(item)"
               :style="index == exampleList.length - 1 ? '' : 'border-bottom: 1px solid #dbeaef'">
            <div class="leftBox">
              <div class="product-name">{{item.name}}</div>
              <div class="product-price">
                <span class="price-text">高价回收</span>
                <span class="price">￥{{item.subtitle}}</span>
              </div>
              <div class="time-phone">
                <span class="time">{{dateFormat('YYYY-mm-dd HH:MM:SS',new Date())}}</span>
                <span class="phone">156-2800-8678</span>
              </div>
            </div>
            <div class="rightBox">
              <b-img fluid :src="item.picUrl"
                     style="height: 85px;width: 104px;margin-left: -1rem"></b-img>
            </div>
          </div>
        </div>
      </b-col>

    </b-row>
  </my-slot>
</template>

<script>
  import MySlot from '@/components/slot/index'
  import {mapMutations} from 'vuex';
  import Title from '@/components/common/title';
  import newsDeatil from '@/components/common/common-detail.vue';
  import exampleDeatil from '@/components/common/example-details.vue';

  export default {
    components: {MySlot, Title, newsDeatil},
    data() {
      return {
        newsList: [],
        exampleList: []
      }
    },
    mounted() {
      this.getExampleList();
      this.getNewsList();
    },
    methods: {
      ...mapMutations(['setSubNavIndex']),
      handleAboutClick() {
        this.setSubNavIndex(0)
        this.$router.push('/about')
      },
      dateFormat(fmt, date) {
        let ret;
        const opt = {
          "Y+": date.getFullYear().toString(),        // 年
          "m+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          "H+": date.getHours().toString(),           // 时
          "M+": date.getMinutes().toString(),         // 分
          "S+": date.getSeconds().toString()          // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          }
          ;
        }
        ;
        return fmt;
      },
      getExampleList() {
        this.$axios.post('/commom/getGoodsList?pageNo=1&pageSize=4&classId=1').then(res => {
          this.exampleList = res.data.data.items;
        })
      },
      getNewsList() {
        this.$axios.post('/commom/getInformationList?pageNo=1&pageSize=4').then(res => {
          this.newsList = res.data.data.items;

        })
      },
      getNewsDeatil(item) {
        this.$axios.post('/commom/getInformationDetail?informationId=' + item.id).then(res => {
          if (res.data.code == 200) {
            this.$layer.iframe({
              content: {
                content: newsDeatil,
                parent: this,
                data: {
                  detailsData: res.data.data
                }
              },
              area: ['80%', '80%'],
              title: res.data.data.title,
              cancel: () => {

              }
            });
          }
        }).catch(err => {
        })
      },
      getExampleDeatil(item) {
        this.$axios.post('/commom/getGoodsDetail?goodsId=' + item.id).then(res => {
          if (res.data.code == 200) {
            this.$layer.iframe({
              content: {
                content: exampleDeatil,
                parent: this,
                data: {
                  detailsData: res.data.data
                }
              },
              area: ['80%', '80%'],
              title: res.data.data.subtitle,
              cancel: () => {

              }
            });


          }
        }).catch(err => {

        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/styles/variables.scss';

  .container {
    padding-top: 70px;
    padding-bottom: 70px;
    margin-top: 50px;
  }

  .leftNewsBox {
    width: 590px;

    .NewsItem {
      width: 100%;
      height: 55px;
      display: flex;
      line-height: 46px;
      padding: 3px 5px;

      .content {
        flex: 1;
        height: 100%;
        font-size: 15px;
        font-family: 微软雅黑;
        color: #2b2b2b;
        font-weight: normal;
        text-decoration: none;
        font-style: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
      }

      .time {
        flex: 1;
        font-size: 15px;
        height: 100%;
        font-family: 微软雅黑;
        font-weight: normal;
        text-decoration: none;
        font-style: normal;
        text-align: right;
        color: #666666;
      }

    }


    .NewsItem:hover {
      cursor: pointer;

      span {
        color: #5bb23f;
      }
    }
  }

  .bottom-Line {
    border-bottom: 1px solid #dbeaef;
  }

  .rightProductBox {
    margin-top: 15px;


    .item {
      display: flex;
      height: 108px;
      padding-top: 10px;

      .leftBox {
        flex: 4;

        .product-name {
          font-size: 18px;
          line-height: 25px;
          color: rgb(28, 47, 103);
        }

        .product-price {
          margin: 6px 0;
          color: rgb(228, 57, 60);

          .price-text {


          }

          .price {

          }
        }

        .time-phone {
          font-size: 13px;
          color: #999999;

          .time {

          }

          .phone {
            margin-left: 5px;

          }
        }
      }

      .rightBox {
        flex: 1;

      }

    }

    .item:hover {
      cursor: pointer;
    }


  }


  @media screen and (max-width: 992px) {
    .title {
      margin-top: 15px;
    }
    .title, .sub-title, .desc {
      text-align: center;
    }
    .sub-title, .btn {
      display: block;
      margin: 0 auto;
    }
  }

  .first-letter {
    font-size: 32px;
    color: #17a2b8;
  }
</style>
