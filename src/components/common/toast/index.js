//创建Toast插件
import Toast from "./Toast.vue"
const toastobj = {}
//use => 调用insatll  install默认携带Vue对象为参数
toastobj.install = function(Vue){
  //不可以直接拿到$el 此时template转为render
  // Vue.extend(Toast) //创建组件构造器
  // // document.body.appendChild(Toast.$el)
  //1.创建组件构造器
  const toastconstructor = Vue.extend(Toast)
  //2.通过组件构造器创建组件对象
  const toast = new toastconstructor()
  //3.组件必须挂载到某个元素上
  toast.$mount(document.createElement("div"))
  //4.将挂在好的组件添加到body上 此时$el就是上面挂载的div
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast //在原型上注册$toast
}
export default toastobj