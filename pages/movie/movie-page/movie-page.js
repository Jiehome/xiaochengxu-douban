var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie:{},
    geturl:"",
    count:12,
    loading:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var title=options.title;
    var geturl="";
    var that=this;
    setTimeout(function () {
      that.setData({
        loading: false
      })
    }, 1000)
    wx.setNavigationBarTitle({
      title: title
    })
    switch(title){
      case "正在热映":
        geturl = app.globalData.apiurl + "v2/movie/in_theaters?city=广州&start=0&count=" ;
        this.getdata(geturl)
        this.setData({ geturl: geturl})
      break;
      case "即将上映":
        geturl = app.globalData.apiurl + "v2/movie/coming_soon?start=0&count=";
      this.getdata(geturl)
      this.setData({ geturl: geturl })
      break;
      case "豆瓣Top250":
        geturl = app.globalData.apiurl + "v2/movie/top250?start=0&count=";
      this.getdata(geturl)
      this.setData({ geturl: geturl })
      break;
    }
  

  },
  navto: function (event) {
    console.log(event)
    wx.navigateTo({
      url: '../movie-details/movie-details?id=' + event.currentTarget.dataset.id,
    })
  },
  getdata:function(geturl){
    let that=this;
    wx.request({
      url: geturl + that.data.count,
      data:{},
      header: { 'content-type': 'json'},
      success:function(res){
        
        that.setData({ movie: res.data.subjects})
        console.log(that.data.movie)
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
    wx.stopPullDownRefresh()
    this.setData({ count: 12 })
    this.getdata(this.data.geturl)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({ count: this.data.count+=6 })
    this.getdata(this.data.geturl)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})