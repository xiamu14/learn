<template>
  <div id="news-wrapper">
    <header>
      <div class="title">{{detail.Title}}</div>
      <div class="info">
        <span class="date">{{ detail.Pb_time }}</span>
        <span class="source">{{ detail.Author }}</span>
      </div>
    </header>
    <article v-html="detail.Content" id="newsArt">
    </article>
    <div class="shadowBox">
      <div class="btn-viewFull" v-on:click="setArticleHeight('show')">点击展开全文</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Object,
    },
  },
  mounted() {
    this.loadImg();
    this.setArticleHeight('hide');
  },
  updated() {
    this.loadImg();
    // this.setArticleHeight()
  },
  methods: {
    loadImg: () => {
      const imgs = document.getElementsByTagName('img');
      for (let i = 0; i < imgs.length; i += 1) {
        if (imgs[i].classList.contains('lazyload')) {
          const src = imgs[i].getAttribute('data-src');
          console.log(src);
          imgs[i].setAttribute('src', src);
        }
      }
    },
    setArticleHeight: (type) => {
      const newsArtDom = document.getElementById('newsArt');
      const shadowBoxDom = document.getElementsByClassName('shadowBox')[0];
      if (type === 'hide') {
        const wHeight = window.innerHeight;
        const articleHeight = wHeight * 1.5;
        newsArtDom.style.height = `${articleHeight}px`;
      } else if (type === 'show') {
        newsArtDom.style.height = 'auto';
        shadowBoxDom.style.display = 'none';
      } else {
        throw Error('paramError: type must to be "hide" or "show"');
      }
    },
  },
};
</script>

<style lang="less">
@rem : 37.5rem;
#news-wrapper {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 10/@rem 15/@rem 8/@rem;
  .title {
    margin-bottom: 6/@rem;
    font-size: 20px;
    color: #232527;
    letter-spacing: 0;
  }
  .info {
    margin-bottom: 15/@rem;
    font-size: 12px;
    color: #969FA5;
    line-height: 12px;
  }
  article {
    font-size: 16px;
    color: #232527;
    letter-spacing: 0;
    line-height: 28px;
    overflow: hidden;
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
  .img-para > img {
    text-align: center;
    width: 100%;
    height: auto;
    margin: 10/@rem auto;
  }
}
</style>
