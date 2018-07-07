import Mock from 'mockjs'
// http 状态码 401
// 因为mock 模拟不了状态码，所以这里需要后端配合一下，这只是数据格式
Mock.mock('http://api.test.com/v1/error2', {
  'msg': 'Token无效或已过期',
  'error_code': '10003',
  'data': null
})
