const api = require("../../../utils/request.js");//引用

var amapFile = require('../../../utils/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "ab939341e7b8f3d2e9a4c36ff008896b"//申请的高德地图key
};

var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置

Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsTxt:[
      { id: 0, picture: '../../../assets/images/newsAdd/news1.png', title: '新农村建设信息', createTime:'2019-11-21'}
      , { id: 1, picture: '../../../assets/images/newsAdd/news2.jpg', title: '我是“小小文明啄木鸟”之垃圾分类宣传活动', createTime: '2019-11-21' }
    ],   //农事新闻

    scanCodeMsg: "",  //扫描二维码
    weather: [],
    region: ['广东省', '广州市', '桐庐县'],
    //轮播
    imgUrls: [    
      '../../../assets/images/images/banner@2x.jpg',
      '../../../assets/images/images/banner@2x.jpg',
      '../../../assets/images/images/banner@2x.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    //一级标题pic
    img1: [
      { id: 1, src: '../../../assets/images/index/icon-gyfw.png', text: '公益服务', http: '../publicService/news/news' },
      { id: 2, src: '../../../assets/images/index/icon-yypx.png', text: '益农培训 ', http: '../train/index/index' },
      { id: 3, src: '../../../assets/images/index/icon-ynsc.png', text: '益农商城', http: '../shop/index/index' },
      { id: 4, src: '../../../assets/images/index/icon-people.png', text: '便民服务', http: '../bmService/index/index' }
    ],
    tabs: ["选项一", "选项二", "选项三"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    tab1: ["农业新闻", "惠农政策", "农业科技"],
    activeIndex1: 0,
    //益农商城 白云村委会益农社  单选
    array: ['白云村委会益农社', '石头村村委益农社', '下神村村委益农社', '凉亭村村委益农社','莽张乡村委益农社'],
    index: 0,
    //便民服务 单选
    array1: ['白云村委会益农社', '石头村村委益农社', '下神村村委益农社', '凉亭村村委益农社', '莽张乡村委益农社'],
    index1: 0,
    //
    img: [
      { id: 1, src: '../../../assets/images/index/icon-money.png', text: '缴费', http: '../publicService/news/news' },
      { id: 2, src: '../../../assets/images/index/icon-tran.png', text: '火车票 ', http: '../train/index/index' },
      { id: 3, src: '../../../assets/images/index/icon-wl.png', text: '物流', http: '../shop/index/index' },
      { id: 4, src: '../../../assets/images/index/icon-yygh.png', text: '医院挂号', http: '../bmService/index/index' },
      { id: 5, src: '../../../assets/images/index/icon-zlb.png', text: '浙里办 ', http: '../train/index/index' },
      { id: 6, src: '../../../assets/images/index/icon-kd.png', text: '快递', http: '../shop/index/index' },
      { id: 7, src: '../../../assets/images/index/icon-jrfw.png', text: '金融服务', http: '../bmService/index/index' }
    ],
    is_show:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loadInfo();  //天气
    // this.test()

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  //调用接口
  test(){
    api.request('/wechat/video/list.json').then(res => {//使用
      console.log(res);
      console.log(api.ourl)
    })

    // api.request('/wechat/club/list.json', { "areaCodeParent": "331081000000" }).then(res => {//使用
    //   console.log(res);
    // })
  },


  //获取当前位置的经纬度
  loadInfo: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', //'wgs84'返回 GPS 坐标，  'gcj02'返回的是火星坐标。这两者之前差别大概是几百米左右。
      //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        console.log(res)
        var latitude = res.latitude.toFixed(6)//维度
        var longitude = res.longitude.toFixed(6)//经度
        const speed = res.speed
        const accuracy = res.accuracy
        that.loadCity(latitude, longitude);
      }
    })
  },

  //把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置，天气情况等信息
  loadCity: function (latitude, longitude) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
    myAmapFun.getRegeo({
      location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
      success: function (data) {
        
      },
      fail: function (info) { }
    });

    myAmapFun.getWeather({
      success: function (data) {
        that.setData({
          weather: data
        })
        console.log(data);
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
    })
  },
  //tab栏切换
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  //tab栏切换 2
  tabClick1: function (e) {
    var id = e.currentTarget.id;
    var tInfo;
    var newsTxt0=[
      { id: 0, picture: '../../../assets/images/newsAdd/news1.png', title: '新农村建设信息', createTime: '2019-11-21' }
      , { id: 1, picture: '../../../assets/images/newsAdd/news2.jpg', title: '我是“小小文明啄木鸟”之垃圾分类宣传活动', createTime: '2019-11-21' }
    ];
    var newsTxt1 = [
      { id: 0, picture: '../../../assets/images/newsAdd/news3.png', title: '做好畜禽防寒工作', createTime: '2019-11-19' }
      , { id: 1, picture: '../../../assets/images/newsAdd/news4.jpg', title: '葡萄入冬前管理', createTime: '2019-11-18' }
      , { id: 2, picture: '../../../assets/images/newsAdd/news5.jpg', title: '冬季鸡舍加强清理', createTime: '2019-11-18' }
    ];
    var newsTxt2 = [
      { id: 0, picture: '../../../assets/images/newsAdd/news6.png', title: '高科技农业设备亮相成都', createTime: '2019-11-15' }
      , { id: 1, picture: '../../../assets/images/newsAdd/news7.jpg', title: '我科学家首次揭示西甜瓜驯化基因组历史', createTime: '2019-11-10' }
      , { id: 2, picture: '../../../assets/images/newsAdd/news8.jpg', title: '功能性西瓜-高番茄红素、瓜氨酸含量西瓜新品种', createTime: '2019-10-9' }
    ];

    id == 0 ? tInfo = newsTxt0 : '';
    id == 1 ? tInfo = newsTxt1 : '';
    id == 2 ? tInfo = newsTxt2 : '';
    e.currentTarget.id
    this.setData({
      activeIndex1: id,
      newsTxt:tInfo
    });
  },
  //地区选择
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(e)
    this.setData({
      region: e.detail.value
    })
  },
  //点击扫描  弹出弹窗
  scanCode: function () {
    var that = this;
    wx.scanCode({ //扫描API
      success(res) { //扫描成功
        console.log(res) //输出回调信息
        that.setData({
          scanCodeMsg: res.result,
          is_show: 1
        });
        wx.showToast({
          title: '成功',
          duration: 1000
        })
      }
    })
  },
  // 获取授权用户信息
  btn_sub: function (res) {
    console.log(res)
    // 声明一个变量接收用户授权信息
    var userinfos = res.detail.userInfo;
    // 判断是否授权  true 替换微信用户头像
    if (userinfos != undefined) {
      this.setData({
        is_show: 0
      })

    } else {
      // false 默认头像

    }

  },


  //轮播
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //点击页面跳转 二级标题
  clickBtn:function(el){
    var twoId = el.target.id;
    if (!twoId){
      return
    }else{
      if (twoId == "two1"){
        wx.navigateTo({
          url: "../publicService/news/news",
        })
      } else if (twoId == "two2"){
        wx.navigateTo({
          url: "../publicService/policy/policy",
        })
      } else if (twoId == "two3") {
        wx.navigateTo({
          url: "../publicService/kj/kj",
        })
      }
    }
  },
  //白云村委会益农社  单选
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //便民服务 单选
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },

  //关闭弹窗
  remove:function(){[
    this.setData({
      is_show: 0
    })
  ]},
  //咨询详情 跳转
  btnDetail:function(){
    wx.navigateTo({
      url: '../../mine/xTnews/xTnews',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '信息进村入户',
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
   console.log(11111) 
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log(22222) 
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})