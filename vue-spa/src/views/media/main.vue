<template>
  <main>
    <Media v-bind:detail="videoDetail" />
    <SplitLine title='扩展阅读' class='relateLink' />
    <Recommend v-bind:recommends='recommends' />
  </main>
</template>

<script>
import Media from './media.vue';
import SplitLine from '../../components/splitLine';
import Recommend from '../../components/recommend';

export default {
  props: {
    videoDetail: {
      type: Object,
    },
  },
  computed: {
    recommends() {
      const recommends = [];
      if (this.videoDetail.recommend) {
        const len = this.videoDetail.recommend.length;
        for (let i = 0; i < len; i += 1) {
          const recommend = this.videoDetail.recommend[i];
          recommends.push({
            type: 'media',
            title: recommend.title,
            date: '',
            source: '',
            com_num: '',
            img_src: recommend.video_img,
          });
        }
      }
      return recommends;
    },
  },
  components: {
    Media,
    Recommend,
    SplitLine,
  },
};
</script>

<style lang="less" scoped>
@rem: 37.5rem;
.relateLink {
  margin-bottom: 10/@rem;
}
</style>

