// pages/chooseImage/chooseImage.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        url: ''
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

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        wx.getImageInfo({
            src: '/images/car.png',
            success: function (res) {
                console.log(res.width)
                console.log(res.height)
                console.log(res)
            }
        })
    },

    openImage() {
        var that = this;
        wx.chooseImage({
            count: 3,
            sourceType: ['album'],
            success: function (res) {
                var temFilePaths = res.tempFilePaths;
                that.setData({
                    url: temFilePaths[0]
                })
                // wx.previewImage({
                //     current: temFilePaths[0], // 当前显示图片的http链接
                //     urls: temFilePaths // 需要预览的图片http链接列表
                // })
            },
        })
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