<template>
  <div id="news-wrapper">
    <header>
      <div class="title">NBA被低估的五大球员，韦德第二，妖刀竟第一！</div>
      <div class="info">
        <span class="date">10-08 10:20</span>
        <span class="source">人民网</span>
      </div>
    </header>
    <article>
      NBA是什么人待的地方？这里没有软蛋，有的只有不输拳击手的大块头，有些人甚至开玩笑的说，想进NBA，不仅球技要好，武力也要一流，哈哈，小编不才，私自给自己认为的十大NBA打架高手排了个名次…… <img src="../../assets/image/pic01.png" alt="测试用图">10、特雷西・麦克格雷迪 额，为什么我家麦蒂也能上榜呢，这就不得不提麦蒂的好基友科比了，当初我还记得盛行这样一句话：科比打球硬，打架软；麦蒂打球软，打架硬。这句话让当时处在童年的小编想到一次笑一次。 一副瞌睡虫模样的麦迪一直被人诟病在球场上霸气不够，不过他也曾经有过快意恩仇的往事。当他还在魔术队的时候，在一场与国王队的比赛中，麦迪与鲍比-杰克逊相互盯防，产生了一些小摩擦。结果在一次进攻中，裁判已经判罚了对方球员的犯规，因此麦迪起跳后没有将球投出。不过此时不知道为什么他头脑一热，竟然将球砸向杰克逊身上。虽然力量不重，但毕竟也是一种侮辱，更意外的是麦迪竟然故意以耸肩，一副爱咋咋的无所谓的样子，结果杰克逊大怒，立即冲了上来。 麦迪也真是了得，很快就将杰克逊摔倒在地，然后左右开弓连续猛击杰克逊。如果你没忘记他35秒杀下13分和坐扣小牛竹竿的往事，就知道他的潜在爆发力了，只是他平时不想打架。
    </article>
    <div class="shadowBox">
      <div class="btn-viewFull">点击展开全文</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@rem : 37.5rem;
#news-wrapper {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 10px 15px 8px;
  .title {
    margin-bottom: 6px;
    font-size: 20px;
    color: #232527;
    letter-spacing: 0;
  }
  .info {
    margin-bottom: 15px;
    font-size: 12px;
    color: #969FA5;
    line-height: 12px;
  }
  article {
    font-size: 16px;
    color: #232527;
    letter-spacing: 0;
    line-height: 28px;
    img {
      width: 100%;
      height: auto;
      margin: 10px auto;
    }
  }
  .shadowBox {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 164/@rem;
    background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 60%);
  }
  .btn-viewFull {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -172.5/@rem;
    width: 345/@rem;
    height: 35/@rem;
    border: 1px solid #1DA1F2;
    border-radius: 3px;
    text-align: center;
    line-height: 35/@rem;
    font-size: 14px;
    color: #1DA1F2;
    background-color: #ffffff;
  }
}
</style>
