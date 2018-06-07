var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:"",
    recommended:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })

    wx.request({
      url: app.globalData.apiurl +'v2/movie/in_theaters?city=广州',
      header: { 'content-type': 'json' },
      success:function(res){
        console.log(res.data.subjects)
        that.setData({ recommended: { movie: res.data.subjects}})
        
      }
    })
  },
  navto: function (event) {
    console.log(event)
    wx.navigateTo({
      url: '../movie/movie-details/movie-details?id=' + event.currentTarget.dataset.id,
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