// pages/mine/xTnews/xTnews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit: '新农村建设信息',
    content1:' 为深入学习贯彻习近平新时代中国特色社会主义思想，通过联盟大家庭，以党建为引领，以党组织为核心，以“党建+”为牵动，推动两新组织党建工作紧跟时代步伐，提升“三服务”水平。6月20日在中国螺杆小镇党群服务中心举行中国螺杆小镇党建联盟启动仪式，并进行联盟首个项目“党建联盟+金融”及政银战略合作的签约仪式。',
    contxt:[
      { id: 1, txt:'一大波晴天来袭'},
      { id: 1, txt: '好在高温并不“在线' },
      { id: 1, txt: '昨天，我们迎来了“白露”节气' },
    ],
    content2:'螺杆小镇党建联盟坚持“围绕中心、服务大局、共建共享、整体推进”的原则，以提升组织力为核心，党委牵头、联盟策划、党员带头、群众参与，形成互带互动、优势互补、资源共建、共同发展的大党建工作格局，不断提高基层党组织创造力、凝聚力和战斗力，助推小镇创业创新发展。螺杆小镇将开展“八联”多维联合，即在党的组织建设上联建、在重大中心任务上联事、在党建主题活动上联动、在党员教育管理上联管、在服务创业创新上联帮、在公益事业服务上联办、在精神文明创建上联网、在公共文化活动上联谊。目前联盟共建单位有职能部门、社会机构、社会组织、群团单位、两新组织党支部。本次启动仪式还进行了“党建联盟+金融”及政银战略合作签约，定海海洋农商银行金塘支行现场对两家企业、两名人才进行授信。',
    content3:'下一步，金塘将继续依托大党建优势，凝聚联盟成员的力量，提高联盟组织的凝聚力、向心力和战斗力，把党建工作作为服务企业、服务群众、服务基层“三服务”工作的红色引擎，进一步助推重点工作、中心任务、岛内经济转型发展，加大对两新企业、小微企业、党员及人才的支持力度，继续打造被企业所需求的党建特色项目，为金塘民营经济高质量发展提供组织保障。'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '资讯详情',
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