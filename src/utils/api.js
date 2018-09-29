import request from './request'
import getHoney from './getHoney'


const api = {
  getNewsList: params => request('http://m.toutiao.com/list/', {
    tag: '__all__',
    ac: 'wap',
    count: 20, // 一次返回条数
    format: 'json_raw',
    ...getHoney(),
    min_behot_time: 0,
    _signature: 'GspyCwAAQWhN.TpQ3WvSCRrKch',
    i: 0,
    ...params
  }),
  getNewsDetail: params => request(`https://m.toutiao.com/i${params.i}/info/`, {
    _signature: 'GspyCwAAQWhN.TpQ3WvSCRrKch',
    i: params.i,
  }),
  getSignature: params => request('http://localhost:3000/signature',params),
}

export default api
