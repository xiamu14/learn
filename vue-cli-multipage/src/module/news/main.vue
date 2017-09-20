<template>
  <main>
    <News />
    <Recommend />
  </main>
</template>

<script>
import News from './news.vue'
import Recommend from '../../components/recommend.vue'
export default {
  components: {
    News,
    Recommend
  }
}
</script>
