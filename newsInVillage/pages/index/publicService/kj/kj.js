//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),

    appid: app.globalData.appid, //小程序appid
    secret: app.globalData.secret,//小程序秘钥
    _token: "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + app.globalData.appid + "&secret=" + app.globalData.secret,      // 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + that.data.appid + '&secret=' + that.data.secret,
    tmpID: 'DidbgU0IP_yoU9-cX0CKioXQQaToTLRJQPKPO-fnC5o', //复制模板id
    openID: '',      //openid
  },


  subMsg(e) {
    console.log("token :_____" + this.data._token)
    console.log("formId :_____" + e.detail.formId)
    console.log("openID :_____" + this.data.openID)
    wx.request({
      url: 'https://www.zjnydsj.com/pushService/wx/push', //仅为示例，并非真实的接口地址
      data: {
        page:'pages/index/publicService/kj/kj',
        openId: this.data.openID,
        formId: e.detail.formId
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  // subMsg(e) {
  //   console.log(e)
  //   console.log("token :_____" +this.data._token)
  //   console.log("formId :_____" + e.detail.formId)
  //   console.log("openID :_____" + this.data.openID)
  //   var that = this
  //   var params = {  //发送给weixin接口的数据
  //     access_token: that.data._token, //必填
  //     touser: that.data.openID,       //必填
  //     template_id: that.data.tmpID,   //必填
  //     form_id: e.detail.formId,       //开发者工具会报错没有formid 真机联调就不报错了
  //     page: "pages/index/index/index",      //点击消息模板进去的页面路径
  //     data: {
  //       "keyword1": { "value": "0123456", "color": "#000" },
  //       "keyword2": { "value": "99", "color": "#000" },
  //       "keyword3": { "value": "2018-11-15", "color": "#000" },
  //       "keyword4": { "value": "西瓜", "color": "#000" },
  //     }
  //   }
  //   wx.request({
  //     url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + that.data._token,
  //     header: {
  //       'content-type': 'application/json'
  //     },
  //     data: params,
  //     method: "POST",
  //     success: function (res) {
  //       console.log(res, '推送成功')
  //     },
  //     fail: function (err) {
  //       console.log(err, '失败');
  //     }
  //   })
  // },





  
  onLoad: function () {
    this.test()

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    this.mytap()  //获取openid
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  mytap: function (e) {
    var that = this
    wx.login({
      success: function (res) {
        console.log(res)
        if (res.code) {
          var d = app.globalData;
          console.log(d.secret)
          var l = 'https://api.weixin.qq.com/sns/jscode2session?appid=' + d.appid + '&secret=' + d.secret + '&js_code=' + res.code + '&grant_type=authorization_code';

          wx.request({
            url: l,
            data: {},
            method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT  
            // header: {}, // 设置请求的 header  
            success: function (res) {
              console.log(res)
              var obj = {};
              obj.openid = res.data.openid;
              obj.expires_in = Date.now() + res.data.expires_in;
              console.log(res.data);
              that.setData({
                message: obj.openid,
                openID: obj.openid
              })
              //wx.setStorageSync('user', obj);//存储openid  
            }
          });
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });

  },

  test(){
    // wx.request({
    //   url: 'http://192.168.14.54:8080/wx/push', //仅为示例，并非真实的接口地址
    //   data: {
    //     openid:'wx2c94d974ea212865' ,
    //     formid:'hYipmWdC3JAbXWbdQRONs50rW84yaXtOtU84kQkKrxs'
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //   }
    // })
  }
  
  


})

