const ourl = 'http://192.168.14.20:8080'
let header = {
  'content-type': 'application/json',
  'openid': '',
  'sessionid': ''
}
wx.getStorage({//获取本地缓存的openid 通过heder发送给后台
  key: 'sessionid',
  success(e) {
    header.openid = e.data.openid
    header.sessionid = e.data.sessionid
  }
})
// const header = 'application/x-www-form-urlencoded'//python后台
function request(url, data) {
  let promise = new Promise((resolve, reject) => {
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: ourl + url,
      // method: method,
      data: {
        datas: data
      },
      header: header,
      success: (res => {
        wx.hideLoading();
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          reject(res.data);
        }
      }),
      fail: (res => {
        wx.hideLoading();
        wx.showToast({
          title: '网络出错',
          icon: 'none',
          duration: 1500
        })
        reject('网络出错');
      })
    })
  })
  return promise;
}

module.exports = {
  request: request,
  ourl: ourl
}