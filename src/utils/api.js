import request from './request'

const api = {
  getNewsArr: () => request.get('http://m.toutiao.com/list', {
    tag: '__all__',
    ac: 'wap',
    count: 20, // 一次返回条数
    format: 'json_raw',
    as: 'A125A8CEDCF8987',
    cp: '58EC18F948F79E1',
    min_behot_time: 0,
    _signature: 's-VgJwAA6Nc8JsRWK-PBirPlYD',
    i: 0
  })
}

export default api
