<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
          url: 'http://192.168.1.117:9000/upload/image',
          thumbnailWidth: 150,
          maxFilesize: 0.5,
          dictDefaultMessage: '上传手持身份证',
          uploadMultiple: true,
          autoProcessQueue: false
      }
    }
  }
}
</script>

<template>
  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
</template>

<style lang="less">
.dropzone .dz-preview .dz-progress {
  left: 0;
  top: 100%;
  margin-top: 0;
  margin-left: 0;
  width: 100%;
  height: 4px;
  border-radius: 0;
  background: #6259DC;
  > .dz-upload {
    opacity: 0;
  }
}
</style>
