// pages/market/search/search.js
var flag = true;  //历史搜索  显示隐藏 默认显示
Page({
  /**
   * 页面的初始数据
   */
  data: {
    his:[
      { id: 1, txt:'大白菜'},
      { id: 2, txt: '丝瓜' },
      { id: 3, txt: '大蒜' },
      { id: 4, txt: '草莓' },
      { id: 5, txt: '油麦菜' },
      { id: 6, txt: '大白菜' },
      { id: 7, txt: '桃子' },
    ],
    show:true,
    //内容部分
    con:[
      { id: 1, txt: '大白菜', gz:'已关注'},
      { id: 2, txt: '丝瓜', gz: '+关注'},
      { id: 3, txt: '大蒜', gz: '+关注' },
      { id: 4, txt: '草莓', gz: '+关注'},
      { id: 5, txt: '油麦菜', gz: '+关注' },
      { id: 6, txt: '大白菜', gz: '+关注' },
      { id: 7, txt: '桃子', gz: '+关注' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //清空历史搜索
  ckRemove:function(){
    let that = this;

    that.setData({
      his:''
    })
  },
  //
  Sxhis:function(){
    if (flag){
      this.setData({
        show: false
      })
    }else{
      this.setData({
        show: true
      })
    }
    flag = !flag
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