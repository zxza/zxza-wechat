//index.js
//获取应用实例
const common = require('../../utils/common.js');

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    text: 'Author:zxza',
    array: [{msg: new Date()},{msg: '2'}],
    routeLink: 'changeRoute'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeTime() {
    this.setData({
        "array[0].msg" : new Function()
    })
  },
  onLoad: function (res) {
    console.log(res)
    common.sayHello('Zxza');
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var appInstance = getApp();
    var appCurentPage = getCurrentPages();
  },
  //一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互
  onReady: function() {
    wx.startPullDownRefresh();  
    console.log(2)
  },
  onShow: function() {
    console.log("this.route:" + this.route)
  },
  onHide: function() {
    console.log(4)
  },
  onUnload: function() {
    console.log(5)
  },
  onPullDownRefresh: function() {
    wx.stopPullDownRefresh();
    console.log(6)
  },
  onShareAppMessage: function(req) {
    wx.hideShareMenu();
    return {
      title: 'zxza',
      path: '/pages/logs/logs',
      imageUrl: '/images/home-blue.png',
      success: function(res) {
        console.log("转发成功:" + JSON.stringify(res));
      }
    }
  },
  onTabItemTap: function(item) {
    console.log("item:" + item.index)
  },
  onReachBottom: function() {
    console.log(8)
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  userInfoTap: function() {
    wx.showModal({
      title: 'zxza',
      content: '点我？',
    })
  },
  changeText: function() {
    this.setData({
      text : 'Author:Zxza'
    })
  },
  changeRoute: function() {
    // wx.redirectTo({
    //   url: '/pages/student/student?test=123',
    // })
  }
})
