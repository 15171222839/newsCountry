// pages/index/train/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt: [
      {id: 1, text: '农作物病虫情报2019年第12期——草地贪夜娥秋防意见', date: '2019-08-10' },
      {id: 2, text: '农作物病虫情报2019年第12期——草地贪夜娥秋防意见 ', date: '2019-07-12' },
      { id: 3, text: '村里移动网络维修，下午13-14点，注意!', date: '2019-7-28' },
      { id: 4, text: '医院挂号', date: '2019-7-23 ' },
      { id: 5, text: '秋播稻种上市啦! ', date: '2019-7-23 ' },
      { id: 6, text: '秋播稻种上市啦!', date: '2019-7-23 ' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点击跳转  资讯详情
  tzPage:function(){
    wx.navigateTo({
      url: '../../../mine/xTnews/xTnews',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '农技知识库',
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