[axios参考](https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/#more)

> 封装地址 /src/util.js
# test

> 基于 vue 的对 axios 封装

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 查看 demo

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 简单使用 
### 预览 http://localhost:8080/#/demo

## 使用

``` bash
# 普通使用
this.$request({
    url: 'xxx'
}).then(res => {
    // 业务逻辑
})

# post请求
this.$post({
    url: 'xxx'
}).then(res => {
    // 业务逻辑
})

# 异常处理，添加了拦截器
# 1、完全自己处理
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

# 2、特殊异常，在拦截器中做判断针对性处理处理
this.$request({
    url: 'token/user'
    }).then(res => {
    // 业务逻辑
})

# 3、很普通的异常，直接可以弹出错误的那种。完全不需要处理，拦截器直接处理的。
this.$request({
    url: 'error3'
    }).then(res => {
    // 业务逻辑
})
```