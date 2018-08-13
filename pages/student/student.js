//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    // logs: [],
    // array: [1,2,3,4,5],
    // view: 'MIMA',
    // id: 0,
    // flag: false,
    // a: 1,
    // b: 2
    array1: [{message:'foo'},{message:'bar'}]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
