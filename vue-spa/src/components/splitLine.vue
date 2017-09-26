<template>
  <div class="splitLine">
    <span class="line"></span>
    <span class="title">{{title}}</span>
    <span class="line"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
@rem: 37.5rem;
.splitLine {
  box-sizing: border-box;
  width: 100%;
  padding: 4px 15px 4px;
  text-align: center;
  >span {
    display: inline-block;
    vertical-align: middle;
  }
  .line {
    width: 138/@rem;
    height: 1px;
    background-color: #D4D8DB;
  }
  .title {
    font-size: 12px;
    color: #CBD0D3;
    line-height: 12px;
  }
}
</style>

