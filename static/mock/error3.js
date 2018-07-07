import Mock from 'mockjs'
// http 状态码 400
// 因为mock 模拟不了状态码，所以这里需要后端配合一下，这只是数据格式
Mock.mock('http://api.test.com/v1/error3', {
  'msg': '用户名或密码错误',
  'error_code': '10002',
  'data': null
})
