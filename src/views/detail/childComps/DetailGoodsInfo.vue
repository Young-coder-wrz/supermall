<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length !==0">
    <div class="goods-describe">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end">
      </div>
    </div>
    <div class="show-imgs">
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="show-imgs-item" v-for="(item, index) in detailInfo.detailImage[0].list" :key="index">
        <img v-lazy="item" @load="goodsImgeLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props: {
      detailInfo: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    methods: {
      goodsImgeLoad(){
        this.$emit("goodsImgeLoad")
      }
    },
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .goods-describe {
    padding: 0 15px;
  }

  .goods-describe .desc{
    font-size: 13px;
    padding: 10px 0;
  }
  
  .start {
    float: left;
  }

  .end {
    float: right;
  }

  .start,
  .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .start::before,
  .end::after {
    content: "";
    width: 5px;
    height: 5px;
    background-color: #333;
    position: absolute;
    bottom: 0;
  }
  .start::before{
    left: 0;
  }
  .end::after{
    right: 0;
  }
  .info-key{
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 14px;
  }
  .show-imgs-item img{
    width: 100%;
  }
</style>