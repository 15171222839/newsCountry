// pages/mine/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["益农社消息", "系统消息"],
    activeIndex: 0,
    btnIndex: 0 ,  //默认显示预报名
    //我加入的益农社
    txt:[
      { id: 1, content: '花生苗的施肥与开花', date:'2019-8-14'},
      { id: 2, content: '积极参加全村政策学习', date: '2019-8-14' },
      { id: 3, content: '集体学习民宿经营要点', date: '2019-8-14' },
      { id: 4, content: '花生苗的施肥与开花', date: '2019-8-14' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击tab框切换
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //点击切换
  btnClick1: function (e) {
    this.setData({
      btnIndex: 0
    })
  },
  btnClick2: function (e) {
    this.setData({
      btnIndex: 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '消息',
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