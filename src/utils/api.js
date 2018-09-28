import request from './request'
import { getSignature, getHoney } from './deciphering'



const api = {
  getNewsList: params => request('http://m.toutiao.com/list', {
    tag: '__all__',
    ac: 'wap',
    count: 20, // 一次返回条数
    format: 'json_raw',
    ...getHoney(),
    min_behot_time: 0,
    _signature: 'cG0CQgAAK8MnWkoZ2oJJx3BtAl',
    i: 0,
    ...params
  }),
  getNewsDetail: params => request(`https://m.toutiao.com/i${params.i}/info/`, {
    _signature: 'cG0CQgAAK8MnWkoZ2oJJx3BtAl',
    i: params.i,
  }),
}

export default api
