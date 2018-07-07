import Mock from 'mockjs'
// http 状态码 400
// 因为mock 模拟不了状态码，所以这里需要后端配合一下，这只是数据格式
Mock.mock('http://api.test.com/v1/error1', {
  'msg': '请先绑定后再进行操作',
  'error_code': '20001',
  'data': null
})
