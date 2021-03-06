/*
 * @author: wes
 * @date: 2017-7-25
 * @desc: 个人中心
*/
var app = getApp()

Page({
  data: {
    userInfo: {}
  },
  // 跳转页面
  page: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },

  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    this.setData({
      userInfo: app.globalData.userInfo,
      member: app.globalData.member
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '个人中心'
    }
  }
})
