<template>
  <div>
    <Swiper>
      <swiper-item v-for="item in banners" :key="item.acm">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="swiperImgLoad">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
 import {Swiper,SwiperItem} from "components/common/swiper"
  export default {
    name:"HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        isLoad:false
      }
    },
    methods: {
      swiperImgLoad(){
        if(!this.isLoad){
          this.$emit("swiperImgLoadOver")
          this.isLoad = true
        }
        
      }
    },
    components:{
      Swiper,SwiperItem
    },
  }
</script>

<style>

</style>