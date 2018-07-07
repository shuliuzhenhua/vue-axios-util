<template>
    <div>
    测试
    </div>
</template>

<script>
require('../../static/mock/test')
require('../../static/mock/error1')
require('../../static/mock/error2')
require('../../static/mock/error3')
export default {
  name: 'Demo',
  created () {
    this.testOk()
    this.testError1()
    this.testError2()
    this.testError3()
  },
  methods: {
    testOk () {
      this.$request({
        url: 'test'
      }).then(res => {
        console.log(res)
      })
    },
    // 这里会说登录过期之类的所以会直接到登录页面，我没写跳转的
    testError1 () {
      this.$request({
        url: 'error1',
        handle: true // 表示不由拦截器处理
      }).then(res => {
        // 自己的正常逻辑
      }).catch(err => {
        if (err.response.data.error_code === 20001) {
          // 业务逻辑
        } else {
          // 可能会有其他的报错 直接弹出来就可以了。
        }
      })
    },
    // 若有异常会自动跳到登录
    testError2 () {
      this.$post({
        url: 'token/user'
      }).then(res => {
        // 业务逻辑
      })
    },
    // 若有异常会自己弹出，无需自己处理
    testError3 () {
      this.$request({
        url: 'error3'
      }).then(res => {
        // 业务逻辑
      })
    }
  }
}
</script>

<style scoped>

</style>
