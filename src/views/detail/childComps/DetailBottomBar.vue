<template>
  <div class="detail-bottom-bar">
    <div class="icon-list">
      <div class="icon-item">
        <div><span class="icon iconfont icon-dianpu"></span></div>
        <div><span class="icon-desc">店铺</span></div>
      </div>
      <div class="icon-item">
        <div><span class="icon iconfont icon-kefu"></span></div>
        <div><span class="icon-desc">客服</span></div>
      </div>
      <div class="icon-item">
        <div><span class="icon iconfont icon-tuanduicankaoxian-"></span></div>
        <div><span class="icon-desc">收藏</span></div>
      </div>
    </div>
    <div class="buttons">
      <div class="btn-cart button-desc" @click="addCart">加入购物车</div>
      <div class="btn-buy button-desc">立即购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBottomBar",
    methods: {
      addCart(){
        this.$emit('addCart')
      }
    },
  }
</script>

<style scoped>
  .detail-bottom-bar {
    background-color: #fff;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    height: 49px;
    display: flex;
    color: #646566;
  }
  .icon-list{
    width: 45%;
    display: flex;
    align-items: center;
  }
  .icon-item {
    flex-grow: 1;
    text-align: center;
  }
  .icon-item .icon{
    font-size: 16px;
  }
  .icon-item .icon-desc {
    font-size: 12px;
  }
  .buttons{
    width: 55%;
    display: flex;
    text-align: center;
    padding: 5px 2px;
  }
  .button-desc{
    font-size: 13px;
    color: rgb(248, 246, 231);
  }
  .buttons .btn-cart,.buttons .btn-buy{
    width: 50%;
    line-height: 39px;
  }
  .buttons .btn-cart{
    background: linear-gradient(90deg,#ffd01e,#ff8917);
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
  }
  .buttons .btn-buy{
    background: linear-gradient(90deg,#ff6034,#ee0a24);
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
  }
</style>