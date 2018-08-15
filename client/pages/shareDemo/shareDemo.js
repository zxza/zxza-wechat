Page({
    data: {
        imgSrc: '../../images/home.png'
    },
    hideShare() {
        wx.hideShareMenu({
            
        })
    },
    openShare() {
        wx.showShareMenu({
            
        })
    },
    onShareAppMessage: function(res) {
        if (res.from = 'button') {
            console.log(res.target)
        }
        return {
            title: '分享Demo',
            path: '/pages/logs/logs',
            imageUrl: '/images/home-blue.png',
            success : function(res) {
                console.log(res)
            }
        }
    }
})