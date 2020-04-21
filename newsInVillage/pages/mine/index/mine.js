Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 默认头像
    image: "../../../assets/images/mine/tx.png",
    //我的内容
    cont:[
      { id: 1, src: '../../../assets/images/mine/photo.png', txt:'绑定手机号'},
      { id: 2, src: '../../../assets/images/mine/photo2.png', txt: '我的培训' },
      { id: 3, src: '../../../assets/images/mine/photo3.png', txt: '消息' },
      { id: 4, src: '../../../assets/images/mine/photo4.png', txt: '我的益农社' },
    ],
    index1:0,  //默认点击授权  框  显示
    nickName:'',  //微信名
    code:0  //二维码默认不显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 获取授权用户信息
  btn_sub: function (res) {
    console.log(res)
    // 声明一个变量接收用户授权信息
    var userinfos = res.detail.userInfo;
    console.log(userinfos.userinfos)
    // 判断是否授权  true 替换微信用户头像
    if (userinfos != undefined) {

      this.setData({
        image: userinfos.avatarUrl,
        nickName: userinfos.nickName,
        index1: 1
      })
    } else {
      // false 默认头像
      this.setData({
        image: "../../../assets/images/mine/tx.png"
      })
    }
    
  },
  //跳转页面
  tzPage:function(e){
    console.log(e)
    var id = e.target.id || e.currentTarget.id;
    if (id != undefined) {
      if(id == 0){
        wx.navigateTo({
          url: '../tel/tel',
        })
      } else if (id == 1) {
        wx.navigateTo({
          url: '../mineTrain/mineTrain',
        })
      } else if (id == 2) {
        wx.navigateTo({
          url: '../news/news',
        })
      } else if (id == 3) {
        wx.navigateTo({
          url: '../farmS/farmS',
        })
      }
    }
  },
  //益农社信息员
  newsPage:function(){
    // wx.navigateTo({
    //   url: '../Consultation/Consultation',
    // })
  },
  //显示二维码
  btnCode: function () {
    this.setData({
      code: 1
    })
  },
  //去除 弹框二维码
  remove:function(){
    this.setData({
      code: 0
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '我的',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})