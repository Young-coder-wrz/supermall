<template>
  <div class="goods-item" @click="linktoDetail">
    <img v-lazy="getImgUrl" :alt="gooditem.title" @load="imgLoad">
    <div class="goods-info">
      <p class="title">{{gooditem.title}}</p>
      <span class="price">{{gooditem.price}}</span>
      <span class="icon iconfont icon-tuanduicankaoxian-"></span>
      <span class="collect">{{gooditem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodListItem",
  props:{
    gooditem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imgLoad(){
      //图片加载完 利用事件总线 让scroll刷新
      this.$bus.$emit("imgLoadOver")
    },
    linktoDetail(){
      this.$router.push("/detail/"+ this.gooditem.iid)
    }
  },
  computed: {
    getImgUrl(){
      return this.gooditem.image || this.gooditem.show.img 
    }
  },
}
</script>

<style>
  .goods-item {
    width: 48%;
    margin-bottom: 3px;
  }

  .goods-item img {
    width: 100%;
    height: 86.5%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 10px;
    padding-bottom: 2px;
  }
  .goods-info .icon{
    margin-right: 2px;
    font-size: 12px;
  }
</style>