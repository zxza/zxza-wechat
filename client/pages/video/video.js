// pages/Video/video.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src : ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    openVideo() {
        var that = this;
        wx.chooseVideo({
            sourceType: ['camera'],
            maxDuration: 60,
            success: function(res) {
                that.setData({
                    src : res.tempFilePath
                })
            }
        })
    },


    //保存视频到系统相册
    contiuneVideo() {
        wx.saveVideoToPhotosAlbum({
            filePath: this.data.src,
            success: function() {
                console.log(123)
            }
        })
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