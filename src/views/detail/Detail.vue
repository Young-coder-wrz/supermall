<template>
  <div class="detail">
    <detail-nav-bar class="detail-navbar" @titleClick="titleClick" ref="detailNavBar"></detail-nav-bar>
    <Scroll class="detail-scroll" ref="scroll" :probeType="3" @getPosition="getPosition">
      <detail-swiper v-if="topImages.length > 0" :topImages="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shops="shops"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo" @goodsImgeLoad="goodsImgeLoad"></detail-goods-info>
      <detail-param-info ref="param" :goodsParams="goodsParams"></detail-param-info>
      <detail-comment-info ref="comment" :commentList="commentList"></detail-comment-info>
      <good-list ref="recommend" :goods="recommendList"></good-list>
    </Scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex"
  import Scroll from "components/common/scroll/Scroll"
  import GoodList from "components/content/goods/GoodsList"

  import DetailNavBar from "./childComps/DetailNavBar"
  import DetailSwiper from "./childComps/DetailSwiper"
  import DetailBaseInfo from "./childComps/DetailBaseInfo"
  import DetailShopInfo from "./childComps/DetailShopInfo"
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo"
  import DetailParamInfo from "./childComps/DetailParamInfo"
  import DetailCommentInfo from "./childComps/DetailCommentInfo"
  import DetailBottomBar from "./childComps/DetailBottomBar"

  import {SETTARBARSTATE, ADDCOUNTER, ADDTOCART} from "store/mutationtype"
  import {
    getDetailData,
    getRecommendData,
    Goods,
    Shops,
    GoodParams
  } from "network/detail"
  import {
    debounce
  } from "common/util"
  import {
    imgListenerMixin,backTopMinxi
  } from "common/mixins"

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shops: {},
        detailInfo: {},
        goodsParams: {},
        commentList: [],
        recommendList: [],
        navBarTops: [],
        getNavBarTops: null,
        currentIndex: 0,
      }
    },
    mixins: [imgListenerMixin, backTopMinxi],
    components: {
      Scroll,
      GoodList,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      DetailBottomBar,
    },
    created() {
      //组件被缓存
      this.iid = this.$route.params.iid

      getDetailData(this.iid).then(res => {
        //获取轮播图数据
        const data = res.result
        this.topImages = data.itemInfo.topImages
        //获取商品数据
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
        //获取店铺数据
        this.shops = new Shops(data.shopInfo)
        //获取详情数据
        this.detailInfo = data.detailInfo
        //获取参数信息
        this.goodsParams = new GoodParams(data.itemParams.info, data.itemParams.rule)
        //获取评论信息
        if (data.rate.cRate !== 0) {
          this.commentList = data.rate.list
        }
      })

      getRecommendData().then(res => {
        this.recommendList = res.data.list
      })
      //防抖 获取offsetTop的防抖函数
      this.getNavBarTops = debounce(() => {
        this.navBarTops = []
        this.navBarTops.push(0)
        this.navBarTops.push(this.$refs.param ? this.$refs.param.$el.offsetTop : 0 )
        this.navBarTops.push(this.$refs.comment ? this.$refs.comment.$el.offsetTop : 0 )
        this.navBarTops.push(this.$refs.recommend ? this.$refs.recommend.$el.offsetTop : 0)
        this.navBarTops.push(Number.MAX_VALUE)
      }, 500)
    },
    methods: {
      //vuex action方法映射到method中
      ...mapActions(["addShopCart"]),
      goodsImgeLoad() {
        //refs当前上下文 父访问子
        this.refresh()
        this.getNavBarTops() //防抖获取theme的OffsetTop
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.navBarTops[index], 300)
      },
      getPosition(position) {
        //0, 12889, 13919, 14232 ,MaxValue
        position = -position.y
        this.isShowBackTop = position > 1000 //滚动大于1000显示
        const length = this.navBarTops.length
        //hacker写法
        for(let i = 0; i < length - 1; i++){
          if(this.currentIndex !== i && position >= this.navBarTops[i] && position < this.navBarTops[i+1]){
            this.currentIndex = i
            this.$refs.detailNavBar.currentIndex = this.currentIndex
          }
        }
        // if (position < this.navBarTops[length - 1]) {
        //   for (let i = 0; i < length-1; i++) {
        //     if (position >= this.navBarTops[i] && position < this.navBarTops[i + 1]) {
        //       this.currentIndex = i
        //     }
        //   }
        // } else this.currentIndex = length - 1
      },
      addCart(){
        const product = {}
        product.image = this.topImages[0]
        product.title = this.goods.title
        product.desc = this.goods.desc
        product.price = this.goods.realPrice
        product.iid = this.iid
        product.count = 1
        this.addShopCart(product).then(res => {
          //添加成功 弹窗
          this.$toast.show(res, 1500)
        })
      }
    },
    destroyed() {
      this.$bus.$off("imgLoadOver", this.imgLoadListener)
    },
    beforeMount() {
      this.$store.commit(SETTARBARSTATE, false)
    },
    beforeDestroy() {
      this.$store.commit(SETTARBARSTATE, true)
    },
  }
</script>

<style scoped>
  .detail {
    position: relative;
    height: 100vh;
  }

  .detail-navbar {
    position: fixed;
    background-color: #fff;
    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
  }

  .detail-scroll {
    position: absolute;
    top: 44px;
    right: 0;
    bottom: 49px;
    left: 0;
    overflow: hidden;
    width: 100%;
    background-color: #ffffff;
  }
</style>