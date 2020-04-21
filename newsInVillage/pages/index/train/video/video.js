// pages/index/train/video/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:[
      { id: 1, srcUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400', text:'杏鲍菇二次出菇技术'},
      { id: 2, srcUrl: '../../../../assets/images/newsAdd/pic2.jpg', text: '野猪仔断奶和养殖管理' },
      { id: 3, srcUrl: '../../../../assets/images/newsAdd/pic3.jpg', text: '青麻叶大白菜系列产品...' },
      { id: 4, srcUrl: '../../../../assets/images/newsAdd/pic4.jpg', text: '怎么出40元一斤的竹笋' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '视频教学',
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