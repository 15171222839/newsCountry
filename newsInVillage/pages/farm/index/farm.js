// pages/farm/farm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '桐庐县'],
    //益农商城 白云村委会益农社  单选
    array: ['白云村委会益农社', '石头村村委益农社', '下神村村委益农社', '凉亭村村委益农社', '莽张乡村委益农社'],
    index: 0,
    //社群消息
    content:[
      {id: 1,flag:0, txt: '天气预报：今天白天到晚上多云间晴,偏北风2到3级,气温7到15度, 明天多云.', zan: '0', num: 36, date:'2019-08-10'},
      { id: 2, flag: 0, txt: '农机维修队今天来了，谁家要修的抓紧时间.', zan: '0', num: 96, date: '2019-07-12' },
      { id: 3, flag: 0, txt: '村里移动网络维修，下午13-14点，注意!', zan: '0', num: 45, date: '2019-7-28' },
      { id: 4, flag: 0, txt: '秋播稻种上市啦!', zan: '0', num: 78, date: '2019-7-23 ' },
      { id: 5, flag: 0, txt: '秋播稻种上市啦!', zan: '0', num: 36, date: '2019-08-10' },
      { id: 6, flag: 0, txt: '农机维修队今天来了，谁家要修的抓紧时间.', zan: '1', num: 96, date: '2019-07-12' },
      { id: 7, flag: 0,txt: '村里移动网络维修，下午13-14点，注意!', zan: '0', num: 45, date: '2019-7-28' },
    ],
    isShow:0,  //默认键盘 切换
    tkShow:0,    //弹框默认  不显示
    pdisShow: true,  //默认 进入益农社，请先登录 ————弹框显示
    newShow:false,     //默认  发布消息不显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setUserInfo();
  },

  // 获取授权用户信息
  btn_sub: function (res) {
    // 声明一个变量接收用户授权信息
    var userinfos = res.detail.userInfo;
    if (userinfos != undefined) {     // 判断是否授权  
      this.setData({
        pdisShow: false,
        newShow: true
      });
    } else {
      // false 默认头像
    }
  },
  /**
  * 设置用户信息
  */
  setUserInfo() {
    //判断用户是否已经授权了
    wx.getSetting({
      success: (data) => {
        // console.log(data);
        if (data.authSetting['scope.userInfo']) {
          //用户已经授权
          this.setData({
            pdisShow: false,
            newShow:true
          });
        } else {
          //用户没有授权
          this.setData({
            pdisShow: true,
            newShow: false
          })
        }
      }
    });

    //获取登陆用户的信息
    wx.getUserInfo({
      success: (data) => {
        // console.log(data);
        this.setData({
          userInfo: data.userInfo
        });
      },
      fail: (data) => {
        console.log("获取用户信息失败" + data);
      }
    });
  },
  //跳转首页
  btnIndex:function(){
    wx.switchTab({
      url: '../../index/index/index',
    })
  },
  //删除弹框
  remove:function(){
    // this.setData({
    //   pdisShow:false
    // })
    wx.switchTab({
      url: '../../index/index/index',
    })
  },


  //点赞
  titBtn:function(t){
    let index = t.currentTarget.dataset.index  // 获取数据的索引
    var that = this;
    let num = 'content[' + index + '].num'  // content[index].num
    let zan = 'content[' + index + '].zan'  // content[index].num
    let flag = 'content[' + index + '].flag'  // content[index].num
    let check = this.data.content[index].flag;
    if (check){
      this.setData({
        [num]: this.data.content[index].num - 1,
        [zan]: 0,
        [flag]: 0
      })
    }else{
      this.setData({
        [num]: this.data.content[index].num + 1,
        [zan]: 1,
        [flag]: 1
      })
    } 
 
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
  //白云村委会益农社  单选
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //点赞  变亮
  btnZan:function(e){
    var that = this; 
    this.setData({
      
    })
  },
  //发布消息
  btnAdd:function(){
    this.setData({
      tkShow:1
    })
  },
  //语音切换
  yyBtn:function(){
    this.setData({
      isShow:1,
    })
  },
  //键盘 
  jpBtn: function () {
    this.setData({
      isShow: 0,
    })
  },
  //返回 益农社
  returnBtn:function(){
    this.setData({
      tkShow: 0,
    })
  },
  //点击搜索框  实现页面跳转 bindfocus 事件
  getSearch: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //点击阴影层  弹框隐藏
  btnHide: function () {
    this.setData({
      tkShow: 0,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '益农社',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setUserInfo();
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