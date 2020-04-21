// pages/index/train/goTrain/goTrain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt: [
      { id: 1, tit: '民宿经济从业人员中式面点师职业技能培训', type: '中式面点师', date: '2019/10/18-2019/11/18',detail:'详情' },
      { id: 2, tit: '种植大户种植技能培训 ', type: '种植技能培训', date: '2019/10/18-2019/11/18', detail: '详情'},
      { id: 3, tit: '民宿经济从业人员中式面点师职业技能培训', type: '中式面点师', date: '2019/10/18-2019/11/18', detail: '详情'},
      { id: 4, tit: '民宿经济从业人员中式面点师职业技能培训', type: '中式面点师', date: '2019/10/18-2019/11/18', detail: '详情' },
      { id: 5, tit: '种植大户种植技能培训 ', type: '种植技能培训', date: '2019/10/18-2019/11/18', detail: '详情' },
      { id: 6, tit: '民宿经济从业人员中式面点师职业技能培训', type: '中式面点师', date: '2019/10/18-2019/11/18', detail: '详情' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  btnPage:function(){
    wx.navigateTo({
      url: "../detail/detail",
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '往期培训',
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