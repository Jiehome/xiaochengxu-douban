var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:{},
    toView: 'green',
    scrollTop: 100,
    scrollLeft: 0,
    loading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    setTimeout(function () {
      that.setData({
        loading: false
      })
    }, 1000)
    wx.request({
      url: app.globalData.apiurl + '/v2/movie/subject/' + options.id,
      header: {
        'content-type': 'json' // 默认值
      },
      success:function(res){
      console.log(res.data)
      wx.setNavigationBarTitle({
        title: res.data.title
      })
      that.setData({
        list:res.data
      })
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