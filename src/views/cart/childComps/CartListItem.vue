<template>
  <div class="cart-list-item">
    <div class="check-botton">
      <check-button :isChecked="cartitem.checked" @click.native="checkClick"/>
    </div>
    <div class="goods-img">
      <img :src="cartitem.image" alt="商品">
    </div>
    <div class="goods-text">
      <div class="goods-title normal-text"><span>{{cartitem.title}}</span></div>
      <div class="goods-desc normal-text"><span>{{cartitem.desc}}</span></div>
      <div class="goods-other">
        <span class="goods-price">{{cartitem.price}}</span>
        <span class="goods-count">{{cartitem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkbutton/CheckButton"
import {UPDATECARTITEM} from "store/mutationtype"
export default {
  name: "CartListItem",
  props:{
    cartitem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    removeSpace(value){
      return value.replace(/\s+/g,"")
    }
  },
  components:{
    CheckButton
  },
  methods: {
    checkClick(){
      //修改state 
      this.$store.commit(UPDATECARTITEM,this.cartitem.iid)
    }
  },
}
</script>

<style scoped>
  .cart-list-item {
    padding: 10px;
    display: flex;
    border-bottom: 6px solid rgba(100,100,100,0.1);
  }
  .check-botton{
    width: 10%;
    display: flex;
    align-items: center;
  }
  .goods-img{
    width: 30%;
  }
  .goods-text{
    width: 60%;
  }
  .normal-text{
    white-space: nowrap;/*不换行*/
    overflow: hidden;
    text-overflow: ellipsis;/*省略号*/
  }
  .goods-text .goods-title{
    font-size: 15px;
    color: #333;
  }
  .goods-text .goods-desc{
    font-size: 13px;
    color: #666;
    margin: 10px 0 25px 0;
  }
  .goods-img img{
    width: 80%;
    height: 90px;
    border-radius: 5px;
  }
  .goods-other{
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
  }
  .goods-other .goods-price{
    color: #ff4500;
  }
  .goods-other .goods-count{
    color: #333;
  }
  .goods-other .goods-price::before{
    content: "￥";
  }
  .goods-other .goods-count::before{
    content: "×";
  }
</style>