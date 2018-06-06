var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hits:{},
    releases:{},
    top250s:{},
    listContent: true,
    searchCotent: false,
    clear:false,
    search:{},
    inputve:"",
    loading:true


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    var hit = "v2/movie/in_theaters?city=广州&start=0&count=3";
    var release ="v2/movie/coming_soon?start=0&count=3";
    var top250 ="v2/movie/top250?start=0&count=3";
    this.getmovie(hit, "hits", "正在热映")
    this.getmovie(release, "releases", "即将上映")
    this.getmovie(top250, "top250s", "豆瓣Top250")
    var that = this;
    setTimeout(function () {
      that.setData({
        loading: false
        })
    },1000)

  },
 
  getmovie: function (urls, keys, title) {
      var that = this;
      wx.request({
        url: app.globalData.apiurl + urls,
        header: {
          'content-type': 'json' // 默认值
        },
        success: function (res) {
          // console.log(res.data.subjects)
         
          var collection={};
          collection[keys] = { movie: res.data.subjects,title: title}
          that.setData(collection)

          console.log(collection)
        }

      })
    },
    more:function(event){
      console.log(event.currentTarget.dataset.title)
      wx.navigateTo({
        url: 'movie-page/movie-page?title='+event.currentTarget.dataset.title,
      })
    },
    onbindfocus:function(){
      this.setData({
        listContent: false,
        searchCotent: true,
        clear: true
      })

    },
    onclear:function(){
    this.setData({
      listContent: true,
      searchCotent: false,
      clear: false,
      search:{},
      inputve:""
    })
    },
    navto:function(event){
      console.log(event)
    wx.navigateTo({
      url: 'movie-details/movie-details?id=' + event.currentTarget.dataset.id,
    })
    },
    onbindchange:function(event){
      var that=this
      var text = event.detail.value;
      this.setData({ inputve: event.detail.value})
      var searchurl =  "v2/movie/search?q=" + text +"start=0&count=21";
      console.log(text)
      this.getmovie(searchurl, "search", "")
    },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log(app.globalData.apiurl)

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