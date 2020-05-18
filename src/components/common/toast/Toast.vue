<template>
    <div class="toast" v-show="isShow">
      <span>{{message}}</span>
    </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      message:"",
      isShow:false
    }
  },
  methods: {
    show(message = "默认文字", duration = 2000){
      this.isShow = true
      this.message = message
      setTimeout(() => {
        this.isShow = false
        this.message = ""
      }, duration)
    }
  },
}
</script>

<style scoped>
  .toast{
    padding: 10px;
    background-color:rgba(0, 0, 0, 0.5);
    color: #fff;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);/*2d偏移 */
  }
  .toast span {
    font-size: 14px;
  }
</style>