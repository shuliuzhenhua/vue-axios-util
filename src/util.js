import axios from 'axios'
axios.defaults.baseURL = 'http://api.test.com/v1/'
const request = (options) => {
  return new Promise((resolve, reject) => {
    // 创建实例
    const instance = axios.create({
      headers: {
        // 'token': localStorage.getItem('token') // 设置header 默认值，根据自己情况而定
      }
    })
    // 添加请求拦截器
    instance.interceptors.request.use(config => {
      // 请求开始之前做的事
      // 例子：例如请求默认带上token，也可以在这里做判断或其他需要函数处理的参数
      // let token = localStorage.getItem('token')
      // if (token === null) {
      //   // 跳的登录页面
      // }
      return config
    })
    instance.interceptors.response.use(res => {
      // 请求成功时的处理
      return res
    }, err => {
      // 1、绕过拦截器，完全自己处理, 参考接口 /static/mock/error1.js
      if (options.handle === true) {
        console.log('自己处理异常')
        return Promise.reject(err)
      }
      // 如果返回的是自己网站的错误应该是有这个data的
      if (err.response.data) {
        // 2、特殊异常，当检测到时采取对应的操作，例如这个表示一定要先登录才可以使用
        if (err.response.data.error_code === 10003) {
          // 参考接口 /static/mock/error2.js
          // token 不对
          // 跳转到登录页面
          console.log('跳转到登录页面')
          return Promise.reject(err)
        }
        console.log('弹出异常')
        // 3、普通异常，比如参数错误或者其他，直接弹出错误就可以的
        // 还有一种错误时只需要提示即可，参考接口 /static/mock/error3.js
        // 这里可以用一个弹出提示
      }
      // 请求失败时的处理
      return Promise.reject(err)
    })
    instance.request(options)
      .then(res => {
        return resolve(res.data) // 直接放回的是后台返回的数据
      })
      .catch(err => {
        return reject(err)
      })
  })
}
const post = (options) => {
  options.method = 'post'
  return new Promise((resolve, reject) => {
    request(options).then(resolve).catch(reject)
  })
}

export default {
  request,
  post
}
