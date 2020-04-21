var util = require('../../../utils/util.js');
var userinfos;  //用户信息
var name;   //用户名称

// pages/farm/newsDetails/newsDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit: '',  //消息栏文字
    twoOne: 0, //默认两种选项
    new: [
      { id: 1, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 2, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 3, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 4, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },

      { id: 1, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 2, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 3, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 4, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 1, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 2, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 3, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 4, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 1, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 2, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 3, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false },
      { id: 4, src: '../../../assets/images/images/banner2.png', name: '王勾践', txt: '还好，我家是电信', date: '8-17', srcUrl: '', width: '', play: false }
    ],
    num: 6,  //首次加载6条
    telTxt: '',
    name: '',  //用户名
    loadingHidden: true, //加载动画

    luStatu: false,//di'bu
    list: [],
    width: 0,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var location = options.location;
    this.setData({
      tit: location
    })
    console.log('详情' + location);

  },
  //切换
  said: function () {
    this.setData({
      twoOne: 1
    })
  },
  text: function () {
    this.setData({
      twoOne: 2
    })
  },

  //获取input里面值
  usernameInput: function (e) {
    console.log(e)
    var telLength = e.detail.value;
    this.setData({
      telTxt: e.detail.value
    })
  },

  //滚动到顶部/左边时触发
  upper(e) {
    console.log(e)
    this.setData({
      loadingHidden: false
    });
    var that = this;
    setTimeout(function () {
      that.setData({
        loadingHidden: true,
        num: that.data.num + 6
      });
    }, 1000);
  },
  //滚动到底部/右边时触发
  bindscrolltolower(e) {
    console.log(e)
  },


  // 获取授权用户信息
  btn_sub: function (res) {
    console.log(res)
    var that = this;
    // 声明一个变量接收用户授权信息
    userinfos = res.detail.userInfo;
    // 判断是否授权  true 替换微信用户头像
    if (userinfos != undefined) {

      var time = util.formatTime(new Date());
      time = time.slice(5, 10).replace("/", "-");
      name = userinfos.nickName;  //yonghu1


      // //发送消息
      console.log(this.data.new.length)
      let list = that.data.new
      if (that.data.telTxt.length > 0) {
        list.push({ id: 1, src: userinfos.avatarUrl, name: userinfos.nickName, txt: that.data.telTxt, date: time, srcUrl: '', width: '', play: false });
        that.setData({
          new: list,
          telTxt: '',
          name: userinfos.nickName
        })
      }

    } else {
      // false 默认头像

    }

  },





  // 触摸开始
  touchStart: function (e) {
    // console.log('touchStart', e);
    var start = e.timeStamp;
    var seconds = (start % (1000 * 60)) / 1000;
    this.setData({
      start: seconds,
      luStatu: true,
    })
    this.recorderManager.start({
      format: 'mp3'
    });
  },

  // 触摸结束
  touchEnd: function (e) {
    // console.log('touchEnd', e);
    var start = this.data.start;
    var end = e.timeStamp;
    var seconds = (end % (1000 * 60)) / 1000;
    var shijian = seconds - start;
    var width = shijian * 4;
    this.setData({
      end: seconds,
      shijian: shijian,
      luStatu: false,
      width: width
    })
    this.recorderManager.stop();
    console.log('按了' + shijian + '秒');
    console.log('width是', width);
  },
  // 实时监测变化调用这些方法
  onShow: function (e) {
    var that = this;
    //  初始化录音对象
    this.recorderManager = wx.getRecorderManager();
    this.recorderManager.onError(function () {
      that.tip("录音失败！")
    });

    // 录音结束
    this.recorderManager.onStop(function (res) {
      var list = that.data.new;
      var width = that.data.width;
      var src = res.tempFilePath;
      console.log('list的1是', list)
      // console.log(src)
      // var aa = {
      //   src: src,
      //   width: width,
      //   play: false
      // }
      // list.push(aa);
      var time = util.formatTime(new Date());
      time = time.slice(5, 10).replace("/", "-");

      list.push({ id: 1, src: '../../../assets/images/images/banner2.png', name: '阳新前端小白', txt: '', date: time, srcUrl: src, width: width, play: false })
      console.log('list的2是', list)
      that.setData({
        new: list,
        name: '阳新前端小白'
      })

      // that.tip("录音完成！")
      //console.log(list)
    });

    this.innerAudioContext = wx.createInnerAudioContext();
    this.innerAudioContext.onError((res) => {
      that.tip("播放录音失败！")
    })
  },
  tip: function (msg) {
    wx.showModal({
      title: '提示',
      content: msg,
      showCancel: false
    })
  },

  // 播放录音
  audioPlay: function (e) {
    console.log(e)
    var that = this;
    var src = e.currentTarget.dataset.src;
    if (src == '') {
      this.tip("失效")
      return;
    }
    this.innerAudioContext.src = src;
    this.innerAudioContext.play();
  },









  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '消息详情',
    })

  },











})