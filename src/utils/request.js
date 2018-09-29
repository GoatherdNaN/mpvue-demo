import wx from './wx'
//请求封装
function request(url, data, method='GET', header = {}) {
  // wx.showLoading({
  //   title: '加载中' //数据请求前loading
  // })
  return new Promise((resolve, reject) => {
    wx.request({
      url, //仅为示例，并非真实的接口地址
      method: method,
      data: data,
      header: {
        'content-type': 'application/json', // 默认值
        'cookie': 'UM_distinctid=164694d0aec638-09114e3855568-5b123112-1fa400-164694d0aed4fa; csrftoken=c24940d42dbafb41f9c5bc06794295d0; _ba=BA0.2-20180705-51225-YtnDOLHB9nbfTXEXhqxR; tt_webid=6574614179776677390; _ga=GA1.2.734654569.1530771646; tt_track_id=eb7e72cb16d2184f2f570c9d168fa82e; _gid=GA1.2.1347510534.1537946028; uuid="w:dfc70eecb0104178af8c6d14640feed7"; W2atIF=1; __tasessionId=yh3rr7ik01538197996353'
      },
      success: function (res) {
        // wx.hideLoading();
        resolve(res.data)
      },
      fail: function (error) {
        // wx.hideLoading();
        reject(false)
      },
      complete: function () {
        // wx.hideLoading();
      }
    })
  })
}

export default request
