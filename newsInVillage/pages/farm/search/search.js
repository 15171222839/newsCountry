// pages/farm/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //社群消息
    content: [
      { id: 1, flag: 0, txt: '天气预报：今天白天到晚上多云间晴,偏北风2到3级,气温7到15度, 明天多云.', zan: '0', num: 36, date: '2019-08-10' },
      { id: 2, flag: 0, txt: '农机维修队今天来了，谁家要修的抓紧时间.', zan: '0', num: 96, date: '2019-07-12' },
      { id: 3, flag: 0, txt: '村里移动网络维修，下午13-14点，注意!', zan: '0', num: 45, date: '2019-7-28' },
      { id: 4, flag: 0, txt: '秋播稻种上市啦!', zan: '0', num: 78, date: '2019-7-23 ' },
      { id: 5, flag: 0, txt: '秋播稻种上市啦!', zan: '0', num: 36, date: '2019-08-10' },
      { id: 6, flag: 0, txt: '农机维修队今天来了，谁家要修的抓紧时间.', zan: '1', num: 96, date: '2019-07-12' },
      { id: 7, flag: 0, txt: '村里移动网络维修，下午13-14点，注意!', zan: '0', num: 45, date: '2019-7-28' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //点赞
  titBtn: function (t) {
    let index = t.currentTarget.dataset.index  // 获取数据的索引
    var that = this;
    let num = 'content[' + index + '].num'  // content[index].num
    let zan = 'content[' + index + '].zan'  // content[index].num
    let flag = 'content[' + index + '].flag'  // content[index].num
    let check = this.data.content[index].flag;
    if (check) {
      this.setData({
        [num]: this.data.content[index].num - 1,
        [zan]: 0,
        [flag]: 0
      })
    } else {
      this.setData({
        [num]: this.data.content[index].num + 1,
        [zan]: 1,
        [flag]: 1
      })
    }

  },

  //点击搜索框  实现页面跳转 bindfocus 事件
  newDetail: function (e) {
    
  },
  //点击获取内容
  placeChoose: function (options) {
    let location = options.currentTarget.dataset.location
    wx.setStorageSync('location', location)
    // console.log(location)
    wx.navigateTo({
      url: '../newsDetails/newsDetails?location=' + location,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '搜索',
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