<template>
  <div class="base-info" v-if="Object.keys(goods).length !== 0">
    <div class="info-title">
      {{goods.title}}
    </div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-column">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-services">
      <span v-for="index in goods.services.length-1" class="info-service-item" :key="index">
        <img :src="goods.services[index-1].icon">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailBaseInfo",
    props: {
      goods: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222;
    font-size: 14px;
    text-align: justify;
  }

  .info-price {
    margin-top: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: var(--color-high-text);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount{
    color: #fff;
    font-size: 12px;
    padding: 3px 5px;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;
    position: relative;
    top:-4px
  }
  .info-column {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    font-size: 12px;
    line-height: 30px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }

  .info-services {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .info-service-item img {
    position: relative;
    top: 2px;
    width: 14px;
    height: 14px;
  }

  .info-service-item span {
    font-size: 12px;
    color: #333333;
    margin-left: 3px;
  }
</style>