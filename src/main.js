import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import toast from "components/common/toast"
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast) //安装toast插件
Vue.use(VueLazyLoad, {
  loading: require("./assets/img/common/placeholder.png") //加载时的图片 webpack引入静态资源 用require
}) //安装懒加载插件

FastClick.attach(document.body) //使用fastclick解决双击缩放带来的300ms延迟
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
