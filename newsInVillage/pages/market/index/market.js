// pages/market/market.js
import * as echarts from '../../../ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  var option = {
    title: {
      left: 'center'
    },
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],

    grid: { //图形位移
      left: 0,
      right: 0,
      top: 10,
      bottom: 20,
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      // boundaryGap: false,  //是否圆点对齐
      axisLine: {
        show: false,
        lineStyle: {
          type: 'solid',
          color: '#c1c2c9',//坐边线的颜色
          width: '1'//坐标线的宽度
        }
      },
      axisTick: { //刻度线
        show: false,
      },
      data: ['8/11', '8/12', '8/13', '8/14', '8/15', '8/16', '8/17'],
      // show: false
    },
    yAxis: {
      // x: 'center',
      type: 'value',
      axisLabel: {  //y轴值  不显示
        formatter: function () {
          return "";
        }
      },
      splitLine: {
        lineStyle: {
          type: 'solid'
        }
      },
      axisLine: { //y轴线
        show: true,
        lineStyle: {
          type: 'solid',
          color: '#c1c2c9',//坐边线的颜色
          width: '1'//坐标线的宽度
        }
      },
      axisTick: { //刻度线
        show: false,
        inside: {
          show: true //x轴刻度线 
        }
      },
      // show: false
    },
    series: [{
      name: '最高价',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
    }, {
      name: '平均价',
      type: 'line',
      smooth: true,
      data: [12, 30, 51, 28, 70, 30, 20]
    }, {
        name: '最低价',
        type: 'line',
      smooth: true,
      data: [6, 20, 31, 20, 40, 20, 10]
    }]
  };

  chart.clear();  //清除原内容
  chart.setOption(option);
  return chart;
}

var num = 0;  //滚动默认高度
var interval
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //echarts数据
    ec: {
      onInit: initChart
    },
    veg:[
      { id: 1, txt:'丝瓜'},
      { id: 2, txt: '大白菜' },
      { id: 3, txt: '草莓' },
    ],
    activeIndex:0,
    //地区选择
    array: ['杭州', '台州', '金华', '绍兴'],
    index: 0,
    //市场价格
    nzrData:[
      { id: 1, txt: '日' },
      { id: 2, txt: '周' },
      { id: 3, txt: '年' },
    ],
    activeId:0,
    //价格选择
    array1: ['最高价', '平均价', '最低价'],
    index1: 1,
    //当日市场价格
    marketM:[
      { id: 1, name: '台州市蔬菜批发中心', pinz:'丝瓜',money:'6.40'},
      { id: 2, name: '金华农产品批发市场', pinz: '韭菜', money: '4.40' },
      { id: 3, name: '金华农产品批发市场', pinz: '大蒜', money: '4.50' },
      { id: 4, name: '金华农产品批发市场', pinz: '大白菜', money: '10.00' },
      { id: 5, name: '金华农产品批发市场', pinz: '南瓜', money: '2.00' },

      { id: 6, name: '台州市蔬菜批发中心', pinz: '丝瓜', money: '6.40' },
      { id: 7, name: '金华农产品批发市场', pinz: '韭菜', money: '4.40' },
      { id: 8, name: '金华农产品批发市场', pinz: '大蒜', money: '4.50' },
      { id: 9, name: '金华农产品批发市场', pinz: '大白菜', money: '10.00' },
      { id: 10, name: '金华农产品批发市场', pinz: '南瓜', money: '2.00' },
    ],
    //市场行情 内容
    imgMarket: [
      {id: 1, src: '../../../assets/images/index/pic1.jpg', text: '葡萄园里采摘热，农产品实现来源可查去向可追...', date:'2019-10-08' },
      { id: 2, src: '../../../assets/images/index/pic1.jpg', text: '借力新业态 农民搭上致富快车 ', date: '2019-10-08' },
      { id: 3, src: '../../../assets/images/index/pic1.jpg', text: '借力新业态 农民搭上致富快车', date: '2019-10-08'},
      { id: 4, src: '../../../assets/images/index/pic1.jpg', text: '葡萄园里采摘热，农产品实现来源可查去向可追...', date: '2019-10-08'}
    ],
    scrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //点击我的关注  蔬菜分类
  tabClick:function(e){
    this.setData({
      activeIndex: e.currentTarget.id
    })
  },
  Sggun:function(){
    var that = this;
    var scrollTop = that.data.scrollTop;
    
    interval = setInterval(function(){
      if (num == 120){
        num = 0
      }
      that.setData({
        scrollTop: num++
      })
      console.log(11111) 
    },100)
  },
  // 日周年 切换
  tabClickMoney:function(e) {
    this.setData({
      activeId: e.currentTarget.id
    })
  },
  //地区选择
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  //价格选择
  bindPickerChange1: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  //点击搜索框  实现页面跳转 bindfocus 事件
  getSearch: function (e) {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  //咨询详情 跳转
  btnDetail: function () {
    wx.navigateTo({
      url: '../../mine/xTnews/xTnews',
    })
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '市场行情',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.Sggun()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(interval);
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