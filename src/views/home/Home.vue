<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control  ref="virtualTab" class="virtualTab" v-show="isTabFixed" :titles="['流行','新款','精选']" @changeType="changeTypeHandle" ></tab-control>
    <Scroll class="content" ref="scroll" :probeType="3" :pullUpLoad="true"
    @getPosition="getPositionHandle" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImgLoadOver="swiperImgLoadOver" v-if="banners.length > 0"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="['流行','新款','精选']" @changeType="changeTypeHandle" ref="tabControl"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
  import NavBar from "components/common/navbar/NavBar"
  import Scroll from "components/common/scroll/Scroll"

  import TabControl from "components/content/tabcontrol/TabControl"
  import GoodsList from "components/content/goods/GoodsList"

  import HomeSwiper from "./childComps/HomeSwiper"
  import RecommendView from "./childComps/RecommendView"
  import FeatureView from "./childComps/FeatureView"

  import {
    getHomeMultiData,
    getGoodsData
  } from "network/home"
  import {debounce} from "common/util"
  import {imgListenerMixin, backTopMinxi} from "common/mixins"
  
  export default {
    name: 'Home',
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          //构造商品数据结构 pop news sell
          pop: {
            page: 0,
            list: []
          },
          new: {
            page: 0,
            list: []
          },
          sell: {
            page: 0,
            list: []
          },
        },
        currentType: "pop",
        tabOffsetTop:0,
        isTabFixed :false,
        saveY:0
      }
    },
    mixins: [imgListenerMixin, backTopMinxi],
    components: {
      NavBar,
      Scroll,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
    },
    created() {
      //请求首页数据
      this.f_getHomeMultiData()
      //请求商品数据
      this.f_getGoodsData("pop")
      this.f_getGoodsData("new")
      this.f_getGoodsData("sell")
    },
    destroyed() {
      console.log("destroyed")
    },
    activated() {
      //再次离开时跳转到上次位置
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      //刷新下scrollHeight
      this.$refs.scroll.refresh()
    },
    deactivated() {
      //获取离开时的Y值
      this.saveY = this.$refs.scroll.getY()
      //取消事件总线中的监听
      this.$bus.$off("imgLoadOver",this.imgLoadListener)
    },
    methods: {
      /**
       * 事件监听function
       */
      //refresh防抖函数 避免refresh频繁触发 请求时间在delay的都不调用refresh
      changeTypeHandle(index){
        switch(index){
          case 0: this.currentType = "pop"; break;
          case 1: this.currentType = "new"; break;
          case 2: this.currentType = "sell"; break;
        }
        this.$refs.virtualTab.currentIndex = index
        this.$refs.tabControl.currentIndex = index
      },
      getPositionHandle(position){
        //BackTop的显示与否
        this.isShowBackTop = (-position.y) > 1000
        
        //TabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        //请求下一页
        this.f_getGoodsData(this.currentType)
      },
      swiperImgLoadOver(){
        //swiper图片加载完毕 重新计算tabControl offsetTop高度
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
      },
      /**
       * 网络请求function
       */
      f_getHomeMultiData() {
        getHomeMultiData().then(res => {
          this.banners = res.data.banner.list
          this.recommends = res.data.recommend.list
        })
      },
      f_getGoodsData(type) {
        const page = this.goods[type].page
        getGoodsData(type, page+1).then(res => {
          //this.goods[type].list.push(...res.data.list) //扩展运算符 逐个添加到数组末尾
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++

          //加载完毕 回调finishPullUp 确保下一次下拉加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
  }
</script>
<style scoped>
  /*scoped作用域 css只针对当前页面dom有效 */
  #home {
    /*挤出nav-bar高度  padding-top: 44px; */
    position: relative;
    height: 100vh; /*vh :viewport height 视口高度 */
  }

  #home .home-nav {
    background-color: var(--color-tint);
    /*为了原生滚动 让其固定 betterScroll不需要 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999; */
  }

  /* .tab-control {
    吸顶效果 sticky static->fixed(top到达指定值时)
    top: 44px;
    position: sticky;
  } */
  .content{
    /*动态获取content高度 两种方法 1.手动计算 2.定位(推荐)*/
    /* 方案1:margin-top: 44px;
    height: calc(100% - 93px);css3计算 父级一定要有高度
    overflow: hidden; */
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
  .virtualTab{
    /*偷天换日 */
    position: relative;
    z-index: 999;
  }
</style>