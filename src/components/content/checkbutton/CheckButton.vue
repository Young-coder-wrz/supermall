<template>
  <div class="check-button"> 
    <span class="icon iconfont icon-duihao" :class="{checked:isChecked}"></span>
  </div>
</template>

<script>
export default {
  name:"CheckButton",
  props:{
    isChecked:{
      type: Boolean,
      default(){
        return true
      }
    }
  }
}
</script>

<style scoped>
  .check-button span{
   font-size: 16px;
   border: 1px solid rgba(100, 100, 100, 0.3);
   color: rgba(0, 0, 0, 0);
   border-radius: 50%;
  }
  .checked{
    color: #fff !important;
    background: linear-gradient(90deg,#ff6034,#ee0a24);
    border: none !important; 
  }
</style>