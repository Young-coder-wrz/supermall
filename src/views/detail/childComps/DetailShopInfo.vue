<template>
  <div v-if="Object.keys(shops).length !== 0" class="shop-info">
    <div class="shop-logo">
      <img :src="shops.shopLogo" :alt="shops.name">
      <span class="title">{{shops.name}}</span>
    </div>
    <div class="shop-content">
      <div class="shop-middle-item shop-info-left">
        <div class="shop-sell">
          <div class="cellcount">{{shops.cSells | parseSells}}</div>
          <div class="small-text">总销量</div>
        </div>
        <div class="shop-good">
          <div class="goodscount">{{shops.cGoods}}</div>
          <div class="small-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-info-right">
        <table class="small-text">
          <tr v-for="(item, index) in shops.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter | parseScore}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailShopInfo",
    props: {
      shops: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    filters: {
      parseSells(item) {
        if (item < 10000) return item;
        return (item / 10000).toFixed(1) + "万"
      },
      parseScore(item) {
        return item ? "高" : "低"
      }
    }
  }
</script>

<style scoped>
  .shop-info {
    padding: 25px 8px;
    border-bottom: 5px solid #f2f5f8;
  }

  .shop-logo {
    display: flex;
    align-items: center;
    line-height: 45px;
  }

  .shop-logo img {
    width: 45px;
    height: 45px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 50%;
  }

  .shop-logo span {
    margin-left: 10px;
    font-size: 14px;
  }

  .shop-content {
    display: flex;
    margin-top: 15px;
    align-items: center;
  }
  .shop-middle-item{
    flex-grow: 1;
  }
  .shop-info-left {
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0, 0, 0, .1);
    width: 60%;
  }

  .shop-info-right {
    font-size: 13px;
    color: #333;
  }

  .cellcount,
  .goodscount {
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: bold;
  }

  .small-text {
    font-size: 12px;
  }

  .shop-info-right table {
    width: 120px;
    margin-left: 30px;
  }

  .shop-info-right table td {
    padding: 5px 0;
  }
  .shop-info-right .score {
    color: #5ea732;
  }
  .shop-info-right .score-better {
    color: #f13e3a;
  }
  .shop-info-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }
  .shop-info-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 15px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 13px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>