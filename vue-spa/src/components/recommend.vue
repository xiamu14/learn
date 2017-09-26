<template>
  <div id="recom-wrapper">
    <a  class="recommendItem" href="" v-for="recommend in recommends" :key="recommend.id">
      <div class="infoBox float-left">
        <div class="title">{{ recommend.title }}</div>
        <div class="other">
          <span class="date" v-if="recommend.date !== ''">{{ recommend.date }}</span>
          <span class="source" v-if="recommend.source !== ''">{{ recommend.source }}</span>
          <span class="comNum" v-if="recommend.com_num !== ''">{{ recommend.com_num }}评</span>
        </div>
      </div>
      <div class="imgBox float-left">
        <img :src="recommend.img_src" :alt="recommend.source">
      </div>
      <div class="clear"></div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
    },
  },
};
</script>


<style lang="less" scoped>
@rem : 37.5rem;
#recom-wrapper {
  box-sizing: border-box;
  width: 100%;
  padding: 0 15/@rem 0;
  a.recommendItem {
    display: block;
    padding-top: 10/@rem;
    padding-bottom: 12/@rem;
    border-bottom: 1px solid #D4D8DB;
  }
  a:first-child{
    padding-top: 0;
  }
  a:last-child{
    border-bottom-width: 0;
  }
  .infoBox {
    width: 70%;
    margin-right: 4%;
    .title {
      margin-bottom: 15/@rem;
      font-size: 16px;
      color: #232527;
      letter-spacing: 0.4px;
      line-height: 20px;
    }
    .other {
      position: relative;
      font-size: 12px;
      color: #969FA5;
      line-height: 12px;
      .comNum {
        display: inline-block; // width: 36/@rem;
        position: absolute;
        bottom: -2/@rem;
        right: 2/@rem;
        height: 16/@rem;
        padding: 0 2/@rem;
        text-align: center;
        line-height: 16/@rem;
        background: #F2F2F2;
        border-radius: 3px;
      }
    }
  }
  .imgBox {
    width: 26%;
    height: 66.5/@rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>

