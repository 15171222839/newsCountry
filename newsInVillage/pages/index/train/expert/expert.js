// pages/index/train/expert/expert.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["全部", "粮油产业", "茶叶产业", '食用菌产业', '蚕桑产业', '中药材产业', '畜牧产业', '花卉产业', '水产渔业', '农业信息化', '饲料', '兽医', '兽药', '植保', '种子','农村能源'],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    content:[
      { id: 1, name: '陈梦夏', Lclass: '粮油产业', cl:'浙江省'},
      { id: 2, name: '姚小华', Lclass: '粮油产业', cl: '浙江省' },
      { id: 3, name: '戚行江', Lclass: '水果产业', cl: '浙江省' },
      { id: 4, name: '王立如', Lclass: '水果产业', cl: '浙江省' },
      { id: 5, name: '金佩华', Lclass: '桑蚕产业', cl: '浙江省' },
      { id: 6, name: '杨荣曦', Lclass: '水果产业', cl: '浙江省' },
      { id: 7, name: '熊彩诊', Lclass: '粮油产业', cl: '浙江省' },
      { id: 8, name: '姚小华', Lclass: '粮油产业', cl: '浙江省' },
      { id: 9, name: '姚小华', Lclass: '粮油产业', cl: '浙江省' },
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '农技专家',
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