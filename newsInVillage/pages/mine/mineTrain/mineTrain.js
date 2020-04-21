// pages/mine/mineTrain/mineTrain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt: [
      { id: 1, tit: '民宿经济从业人员中式面点师职业技能培训', type: '中式面点师', date: '2019/07/08~2019/8/15', detail: '详情' },
      { id: 2, tit: '种植大户种植技能培训 ', type: '种植技能培训', date: '2019/07/08~2019/8/15', detail: '详情' },
      { id: 3, tit: '民宿经济从业人员中式面点师职业技能培训', type: '中式面点师', date: '2019/07/08~2019/8/15', detail: '详情' },
      { id: 4, tit: '民宿经济从业人员中式面点师职业技能培训', type: '中式面点师', date: '2019/07/08~2019/8/15', detail: '详情' },
    ],
    btnIndex:0   //默认显示预报名
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击切换
  btnClick1:function(e){
    this.setData({
      btnIndex:0
    })
  },
  btnClick2: function (e) {
    this.setData({
      btnIndex: 1
    })
  },
  //点击查看先详情
  tzPage:function(){
    wx.navigateTo({
      url: '../trainClassBm/trainClassBm',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '我的培训',
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