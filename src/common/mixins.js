/**
 * Vue混入 Mixins 可以对组件的钩子进行混入(合并)，提高代码复用性 混合对象可以包含任意组件选项。
 */
import {debounce} from "common/util"
import BackTop from "components/content/backtop/BackTop"

export const imgListenerMixin = {
  data(){
    return {
      imgLoadListener:null,
      refresh:null
    }
  },
  mounted() {
    //监听图片是否加载完成
    this.refresh = debounce(this.$refs.scroll.refresh, 200)
    this.imgLoadListener = () => {
      //调用scroll的refresh
      this.refresh()
    }
    this.$bus.$on("imgLoadOver",this.imgLoadListener) //GoodsList图片加载
  },
}

export const backTopMinxi ={
  data() {
    return {
      isShowBackTop: false
    }
  },
  components:{
    BackTop
  },
  methods: {
    //返回到顶部
    backClick(){
      this.$refs.scroll.scrollTo(0 ,0 ,500)
    },
  },
}