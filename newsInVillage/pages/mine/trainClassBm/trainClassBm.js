// pages/index/train/trainClass/trainClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt: [
      { id: 1, tit: '培训专业', type: '居家养老护理' },
      { id: 2, tit: '培训类型 ', type: '普通“两创”使用人才培训' },
      { id: 3, tit: '学员类型', type: '实用人才' },
      { id: 4, tit: '培训开始时间', type: '2019-8-10' },
      { id: 5, tit: '培训结束时间 ', type: '2019-8-15' },
      { id: 6, tit: '培训级别', type: '其他' },
      { id: 7, tit: '培训范围', type: '新昌县城南乡' },
      { id: 8, tit: '所属培训机构', type: '城南乡成技校2' },
      { id: 9, tit: '发放证书类型 ', type: '培训合格证书' },
      { id: 10, tit: '费用涞源', type: '财政补助' },
    ],
    forecast: 0,
    news:[
      {id:1,name:'陈晓',tel:'15871373370'},
      { id: 2, name: '王文强', tel: '13041923376' },
      { id: 3, name: '赵毅', tel: '15171222839' },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //
  btnClass: function () {
    this.setData({
      forecast: 1
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '培训班详情',
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