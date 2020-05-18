<template>
  <Swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item">
    </swiper-item>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  name:"DetailSwiper",
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,SwiperItem
  }
}
</script>

<style>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>