<template>
  <section class="concat bg-dark text-light">
    <div class="container">
      <b-row>
        <b-col lg="6" sm="10" md="10" xs="10" class="wow slideInLeft">
          <dl>
            <dt class="title mb-2">联系我们</dt>
            <dd class="text-justify">贵阳专业收报废车中心：收报废车电话：15208592811刘先生
              是交管局指定的报废车专业解体厂！专业从事老旧机动车，事故车的报废解体业务。可办理各单位个人及部队退役的报废汽车解体，负责办理正规的报废手续，以快捷便利的方式为你解决车辆报废过程中的困难
            </dd>
            <dd>地址： 贵州省贵阳市</dd>
            <dd>电话： 152-0859-2811</dd>
            <dd>邮箱： v185-7517-6400@15dwq.uu.me</dd>
          </dl>
        </b-col>
        <b-col lg="6" sm="10" xs="10" md="10" class="wow slideInRight">
          <b-form @submit="onSubmit">
            <b-form-input
              class="mb-4"
              v-model="form.name"
              name="发信人姓名"
              required
              placeholder="您的姓名"
            ></b-form-input>
            <b-form-input
              class="mb-4"
              v-model="form.phone"
              required
              name="发信人联系方式"
              placeholder="您的手机/邮箱"
            ></b-form-input>
            <b-form-textarea
              class="mb-4"
              v-model="form.message"
              required
              name="发信人留言"
              placeholder="您的留言"
            ></b-form-textarea>
            <b-button type="submit" block variant="success">提 交</b-button>
          </b-form>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>

  export default {
    data() {
      return {
        form: {
          name: '',
          phone: '',
          message: ''
        }
      }
    },
    methods: {
      async onSubmit(evt) {
        evt.preventDefault()
        const phoneReg = /^1[3456789]\d{9}$/
        const emailReg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
        if (!phoneReg.test(this.form.phone) && !emailReg.test(this.form.phone)) {
          this.$bvToast.toast(`失败，请输入正确的手机号或邮箱号`, {
            title: '提交结果',
            variant: 'danger',
            autoHideDelay: 5000
          })
          return
        }
        const res = await this.$axios.post(`/commom/addConvention?name=` + this.form.name + '&phone=' + this.form.phone + '&toshopTime=2020-10-04 11:23:00&serviceId=2&desc=' + this.form.message)
        if (res.data.code == 200) {
          this.form = {
            name: '',
            phone: '',
            message: ''
          }
          this.$bvToast.toast(`提交成功，我们将尽快与您取得联系！`, {
            title: '提交结果',
            variant: 'success',
            autoHideDelay: 5000
          })
        } else {
          this.$bvToast.toast(`提交失败，请稍后重试！`, {
            title: '提交结果',
            variant: 'danger',
            autoHideDelay: 5000
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .concat {
    padding: 50px 0;

    .title {
      font-size: 16px;
    }
  }
</style>
