<script>
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

// 表单这类交互型组件，应该使用事件驱动开发
const dropzoneComOptions = {
  url: '#',
  thumbnailWidth: 150,
  maxFilesize: 0.5,
  dictDefaultMessage: '',
  uploadMultiple: false,
  autoProcessQueue: false,
}

export default {
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions_1: Object.assign({}, dropzoneComOptions, {
        dictDefaultMessage: '请上传手持身份证照',
      }),
      dropzoneOptions_2: Object.assign({}, dropzoneComOptions, {
        dictDefaultMessage: '请上传身份证正面',
      }),
    }
  },
  mounted() {
  },
  methods: {
    submit() {
      const id_card_1 = this.$refs.dropzone_1.getAcceptedFiles()[0].dataURL;
      // 合并表单内容
      // const form = new FormData(this.$refs.form);
      const data = {
        name: 'test1',
        phone: '12131234',
        id_number: '8787781234124',
        file: id_card_1,
        fikleL: id_card_1.length,
      }
      // form.append('id_card_2', this.$refs.dropzone_2.getAcceptedFiles()[0]);
      this.sendData(data);
      console.log(data);
    },
    sendData(data) {
      const XHR = new XMLHttpRequest();
      // 定义成功的数据提交后会发生什么
      XHR.addEventListener('load', function(event) {
        console.log('Yeah! Data sent and response loaded.');
      });

      // 定义失败的情况会发生什么
      XHR.addEventListener('error', function(event) {
        console.log('Oups! Something goes wrong.');
      });

      // 配置请求
      XHR.open('POST', 'http://app-beta.zifeiyucoco.com/user/authentication');

      // 添加表单数据POST请求所需的HTTP请求头
      // XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

      // 最后，发送数据
      XHR.send(data);
    }
  },
}
</script>

<template>
  <form ref='form'>
    <input type="text" name="name">
    <vue-dropzone ref="dropzone_1" id="dropzone_1" :options="dropzoneOptions_1"></vue-dropzone>
    <vue-dropzone ref="dropzone_2" id="dropzone_2" :options="dropzoneOptions_2"></vue-dropzone>
    <div class="btn btn_submit" @click="submit">提交</div>
  </form>
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
.btn {
  width: 200px;
  height: 44px;
  color: #ffffff;
  font-size: 24px;
  line-height: 44px;
  text-align: center;
  background-color: aquamarine;
  border-radius: 22px;
}
</style>
