import Mock from 'mockjs'
Mock.mock('http://api.test.com/v1/test', {
  'list|1-10': [{
    'id|+1': 1
  }],
  'string|1-10': '*',
  'number|+1': 202,
  'number2|1-100': 100,
  'number3|1-100.1-10': 1,
  'boolean|1-2': true,
  'boolean1|1-2': true,
  'boj|1-2': {
    '001': '上海',
    '002': '北京',
    '003': '大阪'
  },
  'arr': [
    'goudan',
    'twodogegg'
  ],
  'arr2': [
    {
      'name|+1': [
        'hello',
        'mock.js',
        '!'
      ]
    }
  ],
  'date': Mock.mock('@datetime("yyyy-MM-dd A HH:mm:ss")'),
  'now': Mock.mock('@now()'),
  'img': Mock.Random.image('200x100', '#894FC4', '#FFF', 'png', 'eeeeee'),
  'text': Mock.mock('@cparagraph'),
  'name': Mock.mock('@name'),
  'cname': Mock.mock('@cname'),
  'email': Mock.mock('@email'),
  'county': Mock.mock('@county(true)'),
  'id': Mock.mock('@id')
})
