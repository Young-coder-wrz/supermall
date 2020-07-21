<template>
  <div class="detail-params" v-if="Object.keys(goodsParams).length !== 0">
    <div class="desctext">
      <span>尺码信息</span>
    </div>
    <table :class="{'tab-size':table[0].length >3}" v-for="(table, tabindex) in goodsParams.size" :key="tabindex">
      <tr v-for="(tr,indexy) in table" :key="indexy">
        <td v-for="(td, index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <div class="desctext params">
      <span>参数信息</span>
    </div>
    <table>
      <tr v-for="(item, index) in goodsParams.info" :key="index">
        <td class="info-param-key">{{item.key}}</td>
        <td class="info-param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="goodsParams.image">
      <img :src="goodsParams.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props: {
      goodsParams: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params .desctext{
    margin: 10px 0;
    font-size: 14px;
  }
  .detail-params{
    padding: 20px 15px;
    font-size: 13px;
    border-bottom: 5px solid #f2f5f8;
  }
  .detail-params table{
    width: 100%;
    border-collapse: collapse;
  }
  .tab-size{
    text-align: center;
  }
  .params
  {
    margin: 20px 0 !important;
  }
  .detail-params table tr {
    height: 42px;
  }
  .detail-params table tr td {
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-param-key{
    width: 96px;
  }
  .info-param-value{
    color: #eb4868;
  }
  .info-img img{
    width: 100%;
  }
</style>