<template>
  <main>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
      <swiperSlide v-for="(slide, index) in swiperSlides" :key="slide.id">
        <div class="imgItem">
          <img :src="slide" alt="">
        </div>
        <div class="info">
          <p class="title">
            <i class="imgNum">{{index+1}}/{{imageDetail.imgs.length}}</i> {{imageDetail.name}}</p>
          <p class="content">{{imageDetail.desciption}}</p>
        </div>
      </swiperSlide>
    </swiper>
  </main>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { getQuery } from '../../assets/js/util';

export default {
  props: {
    imageDetail: {
      type: Object,
    },
  },
  data() {
    return {
      swiperOption: {
        autoplay: false,
        setWrapperSize: true,
        loop: true,
        initialSlide: 1,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        onInit: (swiperObj) => {
          const type = parseInt(getQuery('picType'), 10);
          if (type === 2) {
            const len = swiperObj.slides.length - 2;
            swiperObj.slideTo(len, 100);
          }
        },
        onTransitionStart: (swiperObj) => {
          const previousIndex = swiperObj.previousIndex;
          const index = swiperObj.realIndex + 1;
          const len = swiperObj.slides.length - 2;
          // console.log('previousIndex', previousIndex)
          // console.log('transitionStart', index)
          if (previousIndex === len && index === 1) {
            // console.log('跳转到下一个图集的第一页')
            window.location.href = 'http://localhost:8080/image';
          } else if (previousIndex === 1 && index === len) {
            // console.log('跳转到上一个图集的最后一页')
            window.location.href = 'http://localhost:8080/image?picType=2';
          }
        },
      },
    };
  },
  computed: {
    swiperSlides() {
      const slides = [];
      if (this.imageDetail.imgs) {
        const len = this.imageDetail.imgs.length;
        // console.log(len)
        for (let i = 0; i < len; i += 1) {
          slides.push(this.imageDetail.imgs[i].qiushi_url);
        }
      }
      return slides;
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style lang="less" scoped>
@rem: 37.5rem;
main {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: #000000;
  .imgItem {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 15/@rem;
    background-color: #000000;
    .title {
      margin-bottom: 12/@rem;
      font-size: 16px;
      color: #ffffff;
      // letter-spacing: -0.1px;
      line-height: 20px;
      i.imgNum {
        font-size: 12px;
      }
    }
    .content {
      line-height: 1.5;
      font-size: 14px;
      color: rgba(255, 255, 255, 0.7);
      letter-spacing: -0.09px;
    }
  }
}
.swiper-container {
  height: 100%;
}
</style>

