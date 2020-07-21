<template>
  <div class="comment-info" v-if="commentList.length">
    <div class="comment-item" v-for="(item, index) in commentList" :key="index">
      <div class="comment-txt">
        <span>用户评价</span>
        <div class="more">
          <span>更多</span>
          <span class="icon iconfont icon-you"></span>
        </div>
      </div>
      <div class="user-info">
        <img :src="item.user.avatar">
        <span class="username">{{item.user.uname | parseUname}}</span>
      </div>
      <div class="comment-content">
        <p>{{item.content}}</p>
      </div>
      <div class="comment-desc">
        <span class="comment-time">{{item.created | parseDate}}</span>
        <span class="other">{{item.style}}</span>
        <div class="info-imgs">
          <img :src="imgitem" v-for="(imgitem, imgindex) in item.images" :key="imgindex">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    formatDate
  } from "common/util"
  export default {
    name: "DetailCommentInfo",
    props: {
      commentList: {
        type: Array,
        default () {
          return []
        }
      }
    },
    filters: {
      parseDate(value) {
        return formatDate(value * 1000)
      },
      parseUname(value) {
        if (value.length > 3) {
          let middleindex = value.length % 2 == 0 ? value.length / 2 - 1 : ~~(value.length / 2)
          return value.substring(0, middleindex - 1) + "***" + value.substring(middleindex + 2)
        } else {
          return value
        }
      }
    }
  }
</script>

<style scoped>
  .comment-info {
    font-size: 13px;
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }

  .comment-txt {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    line-height: 40px;
  }

  .user-info {
    display: flex;
    align-items: center;
    margin: 10px 0;
  }

  .user-info .username {
    margin-left: 10px;
  }

  .user-info img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .more {
    display: flex;
    align-items: center;
  }
  .more .icon{
    margin-left: 5px;
    font-size: 20px;
  }
  .comment-content {
    padding: 5px;
    margin-bottom: 5px;
  }

  .comment-content p {
    color: #777;
  }

  .comment-desc {
    padding-left: 5px;
    color: #999;
    font-size: 12px;
  }

  .comment-desc .other {
    margin-left: 8px;
  }
  .info-imgs {
    margin-top: 10px;
  }
  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
    border: 1px solid rgba(100, 100, 100, 0.1);
  }
</style>