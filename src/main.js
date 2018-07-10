import Vue from 'vue'
import store from '@/store'
import App from './App'

Vue.config.productionTip = false

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      'pages/news/list'
    ], // Will be filled in webpack
    window: {
      backgroundTextStyle: 'light',
      backgroundColor: '#d22222',
      backgroundColorTop: '#d22222',
      navigationBarBackgroundColor: '#d22222',
      navigationBarTitleText: '最新资讯',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#d22222',
      backgroundColor: '#fff',
      borderStyle: 'black',
      list: [{
        pagePath: 'pages/news/list',
        text: '资讯',
        iconPath: 'static/assets/hi-news.png',
        selectedIconPath: 'static/assets/hi-news-active.png'
      }, {
        pagePath: 'pages/mine/list',
        text: '我的',
        iconPath: 'static/assets/mine.png',
        selectedIconPath: 'static/assets/mine-active.png'
      }]
    }
  }
}
