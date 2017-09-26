<template>
  <main>
    <News v-bind:detail="newsDetail" />
    <SplitLine title='扩展阅读' class='relateLink' />
    <Recommend v-bind:recommends='recommends' />
    <SplitLine title='热门评论' class='hotComt' />
    <Comment v-bind:comments="newsDetail.comments" />
  </main>
</template>

<script>
import News from './news.vue';
import SplitLine from '../../components/splitLine';
import Recommend from '../../components/recommend';
import Comment from '../../components/comment';

export default {
  props: {
    newsDetail: {
      type: Object,
    },
  },
  computed: {
    recommends() {
      const recommends = [];
      if (this.newsDetail.recommend) {
        const len = this.newsDetail.recommend.length;
        for (let i = 0; i < len; i += 1) {
          const recommend = this.newsDetail.recommend[i];
          recommends.push({
            type: 'media',
            title: recommend.Title,
            date: recommend.Pb_time,
            source: recommend.Author,
            com_num: recommend.comment_count,
            img_src: recommend.imgs[0].qiushi_url,
          });
        }
      }
      return recommends;
    },
  },
  components: {
    News,
    Recommend,
    SplitLine,
    Comment,
  },
};
</script>

<style lang="less" scoped>
@rem: 37.5rem;
.relateLink {
  margin-bottom: 10/@rem;
}
</style>

