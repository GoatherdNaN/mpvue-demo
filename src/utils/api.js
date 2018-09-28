import md5 from 'blueimp-md5'
import request from './request'

const getHoney = () => {
  var t = Math.floor((new Date).getTime() / 1e3),
    e = t.toString(16).toUpperCase(),
    i = md5(t).toString().toUpperCase();
  if(8 != e.length) return { as: "479BB4B7254C150", cp: "7E0AC8874BB0985" };
  for(var n = i.slice(0, 5), a = i.slice(-5), s = "", o = 0; 5 > o; o++) s += n[o] + e[o];
  for(var r = "", c = 0; 5 > c; c++) r += e[c + 3] + a[c];
  return { as: "A1" + s + e.slice(-3), cp: e.slice(0, 3) + r + "E1" }
};

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
