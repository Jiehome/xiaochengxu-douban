Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{ "url": "../image/bg-header1.jpg" }, { "url": "../image/bg-header2.jpg" }, { "url":"../image/bg-header3.jpg"}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  skin:function(event){
    console.log(event.target.dataset.url)
    wx: wx.setStorageSync("bg", event.target.dataset.url)
    wx.switchTab({
      url: 'me',   //注意switchTab只能跳转到带有tab的页面，不能跳转到不带tab的页面
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