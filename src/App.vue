<template>
  <div id="app" ref="app" @click="hideMenu" :style="{'background-color': Ibg}" :class="{Inight: night }">
      <div class="topBar">
      <img @click.stop="toggle(show)"  class="menu" src="../src/assets/菜单.png" >
      <img @click.stop="rightMenus" class="sandian" src="../src/assets/三点.png" >
      </div>
      <menuLeft 
        v-on="{
          setting:Setting,
          showSave:showSave}">
      </menuLeft>

      <menuRight 
        :class="{marR:rightmenu}"
        :data="data"
        :save="isSaved"
        v-on="{
          Save:Save, 
          removeSave:removeSave,
          hide:hideMenu,
          goArticle:goArticle, 
          random:randomArticle, 
          today:getArticle}"
      ></menuRight>

      <save v-on="{hide:showSave,go:goArticle}" :saveArticles="saveTotal"
      :class="{hideSave:saveShow}"></save> 
      
      <setting
        v-on="{setSize:setSize, setNight:setNight,setBg: setBg}" :class="{hideSetting:setting}"></setting>
      <div class="article">
          <div class="title">{{data.title}}</div>
          <div class="xian"></div>
          <div class="author">{{data.author}}</div>
          <p class="content" v-html="data.content"></p>
          <div class="xian"></div>
          <footer class="wc">全文完&nbsp;&nbsp;共{{ data.wc }}字</footer>
      </div>
      
   
  </div>
  

</template>

<script>
import defaultFontSize  from '../static/rem.js'
import menuLeft from '~/menu_left'
import menuRight from '~/menu_right'
import setting from '~/setting'
import save from '~/save'
import storage from '../static/storage'
export default {
  name: 'app',
  data () {
    return {
      data: {},
      show: false,
      rightmenu: false,
      leftmenu: false,
      setting: false,
      saveShow: false,
      saveTotal: [],
      night: false,
      Ibg: '#fafafa'
    }
  },
  created: function () {
    if(storage.get('articles')){
      if (storage.get('articles').length > 0) {
      this.saveTotal = storage.get('articles')
      }
    }
  },
  mounted: function () {
    this.getArticle()
    defaultFontSize.defaultFontSize
  },
  components: {
    menuLeft,
    menuRight,
    setting,
    save
  },
  methods: {
    getArticle () {
      this.$ajax({
        method: 'get',
        baseURL: '/api/article',
        url: 'today',
        params: {
          dev: 1
        }
      }).then((res) => {
         this.data = res.data.data
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    goArticle (date) {  
    console.log(date)   
      this.$ajax({
        method: 'get',
        baseURL: '/api/article',
        url: 'day',
        params: {
          dev: 1,
          date: date
        }
      }).then((res) => {
         this.data = res.data.data
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    randomArticle () {
      this.$ajax({
        method: 'get',
        baseURL: '/api/article',
        url: 'random',
        params: {
          dev: 1
        }
      }).then((res) => {
         this.data = res.data.data
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    },
    // 组件显示隐藏
    toggle: function (show) {
      if(show == false){
        this.$refs.app.style.left = 30 +'%'
        this.show = true
      } else {
        this.$refs.app.style.left = 0 +'%'
        this.show = false
      }
    },
    hideMenu: function () {
      if (this.rightmenu || this.leftmenu || this.setting) {
        this.leftmenu = false
        this.rightmenu = false
        this.setting = false
      }
    },
    rightMenus: function () {
      this.rightmenu =! this.rightmenu
    },
    showSave () {
      this.toggle()
      this.saveShow =! this.saveShow
    },
  // 收藏
    Save (data) {
      console.log(this.saveTotal)
      this.saveTotal.unshift(data)
      storage.set('articals',this.saveTotal)
    },
    removeSave (data) {
      for(let item in this.saveTotal){
        if(this.saveTotal[item].title == data){
          this.saveTotal.splice(item,1)
        }
      }
      storage.set('articals',this.saveTotal)
    },
  // 阅读设置
    Setting () {
      document.body.style.overflow = 'auto'
      this.setting = true
      this.toggle()
    },
    setSize (val) {
      document.querySelector('.content').style.fontSize = val
    },
    setBg (val) {
      this.night = false
      this.Ibg = val
    },
    setNight () {
      this.night = !this.night
      this.night ? document.querySelector('.article').style.color = '#fff' :document.querySelector('.article').style.color = '#2c3e50'
    }
 },
  computed: {
    isSaved () {
      for (let item in this.saveTotal) {
        if (this.saveTotal[item].title === this.data.title) {
          return true
        }
      }
      return false
    }
  }

}


</script>

<style scoped>


#app {
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  transition: left .5s;
  left: 0;
  overflow: hidden;
  font-family: '微软雅黑'; 
  background: #fff;

}
.marR{
  right: 0;
}
.title{
  padding-top: 1rem;
  font-size: .4rem;
  font-weight: normal
}
.xian{
  margin: .16rem auto;
  width: 90%;
  border-top: 1px solid #fff;
  box-shadow: 3px 1px rgb(207, 206, 206);
}
.author{
  font-size: .15rem;
  color: #888888;
}
.content{
  padding: .2rem;
  text-indent: .4rem;
  font-size: .3rem;
  text-align: left;
}
footer{
  margin: 0 auto;
  font-size: .18rem;
}
img{
  height: .5rem;
}
.topBar{
  position: fixed;
  height: .8rem;
  width: 100%;
  z-index: 10;
  background: inherit;;
}
 .menu{
  position: relative;
  height: .5rem!important;
  float:left;
  z-index: 9;
  padding: .2rem;
 } 
.sandian{
  position: relative;
  height: .5rem!important;
  float:right;
  z-index: 9;
  padding: .2rem;
}
 .Inight{
    background:#444 !important;
  }
  .hideSetting {
    bottom:0 !important;
  }
  .marR{
    right: 0 !important;
  }
  .hideSave{
    left:0!important;
  }

</style>
