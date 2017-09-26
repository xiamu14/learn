<template>
  <div id="com-wrapper">
    <div class="commentItem" v-for="item in comments" :key="item.id">
      <header>
        <div class="portrait float-left"></div>
        <div class="userInfo float-left">
          <p class="name">{{ item.Author }}</p>
          <p class="date">12小时前</p>
        </div>
        <div class="favorite float-right">
          <i class="icon-favorite default"></i>
          <i class="num">122</i>
        </div>
        <div class="clear"></div>
      </header>
      <article>
        <div class="content">{{ item.Content }}</div>
        <!-- 评论回复，暂时隐藏 -->
        <!-- <div class="replay">
          <p class="item">
            <i class="name">泥马</i>：生活中，我们常常需要解决一些大而复杂的问题～
          </p>
          <div class="btn-viewFull">查看全部</div>
        </div> -->
      </article>
    </div>
  </div>
</template>

<script>
// require('../assets/css/comment.css');

export default {
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 37.5rem;
#com-wrapper {
  width: 100%;
  .commentItem {
    padding: 15px;
    border-bottom: 1px solid #D4D8DB;
  }
  header {
    margin-bottom: 10/@rem;
    .portrait {
      width: 30/@rem;
      height: 30/@rem;
      margin-right: 8/@rem;
      border-radius: 50%;
      background-color: #d4d8db;
    }
    .userInfo {
      .name {
        margin-top: 2/@rem;
        margin-bottom: 4/@rem;
        font-size: 12px;
        color: #969FA5;
        line-height: 14px;
      }
      .date {
        font-size: 10px;
        color: #969FA5;
        line-height: 10px;
      }
    }
    .favorite {
      .icon-favorite {
        width: 16/@rem;
        height: 16/@rem;
        display: inline-block;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        &.default {
          background-image: url(../assets/image/btn-favorite-default.png);
        }
        &.active {
          background-image: url(../assets/image/btn-favorite-active.png);
        }
      }
      .num {
        font-size: 12px;
        color: #1DA1F2;
      }
    }
  }
  article {
    padding: 0 15px 0 38px;
    .content {
      font-size: 13px;
      color: #232527;
      letter-spacing: 0;
      line-height: 19px;
    }
    .replay {
      background: #F8F8F8;
      margin-top: 10/@rem;
      padding: 10/@rem 25/@rem 12/@rem 12/@rem;
      p.item {
        font-size: 12px;
        color: #111300;
        letter-spacing: 0;
        line-height: 17px;
        .name {
          font-size: 12px;
          color: #969FA5;
          letter-spacing: 0;
        }
      }
      .btn-viewFull {
        margin-top: 8/@rem;
        font-size: 12px;
        color: #008AFF;
        letter-spacing: 0;
      }
    }
  }
}
</style>

