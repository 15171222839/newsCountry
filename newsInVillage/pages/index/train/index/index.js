Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '桐庐县'],
    imgUrls: [    //轮播
      '../../../../assets/images/index/banner@2x.png',
      '../../../../assets/images/index/banner@2x.png',
      '../../../../assets/images/index/banner@2x.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    img1: [
      { id: 1, src: '../../../../assets/images/index/icon-gyfw.png', text: '公益服务', http: '../../publicService/news/news' },
      { id: 2, src: '../../../../assets/images/index/icon-yypx.png', text: '益农培训 ', http: '../../train/index/index' },
      { id: 3, src: '../../../../assets/images/index/icon-ynsc.png', text: '益农商城', http: '../../shop/index/index' },
      { id: 4, src: '../../../../assets/images/index/icon-people.png', text: '便民服务', http: '../../bmService/index/index' }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //地区选择
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  //轮播
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //点击页面跳转 二级标题
  clickBtn: function (el) {
    var twoId = el.target.id;
    if (!twoId) {
      return
    } else {
      if (twoId == "two1") {
        wx.navigateTo({
          url: "../publicService/news/news",
        })
      } else if (twoId == "two2") {
        wx.navigateTo({
          url: "../publicService/policy/policy",
        })
      } else if (twoId == "two3") {
        wx.navigateTo({
          url: "../publicService/kj/kj",
        })
      }
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '信息进村入户',
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