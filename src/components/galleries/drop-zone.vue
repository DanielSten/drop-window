<template>
  <div>
    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions" :useCustomSlot=true :include-styling="false">
      <div class="dropzone-custom-content">
        <h3 class="dropzone-custom-title">Drag and drop to upload content!</h3>
        <div class="subtitle">...or click to select a file from your computer</div>
      </div>
    </vue-dropzone>
    <button class="block-name" @click="allImages">Browse image</button>
    <button class="block-name" @click="deleteImages">Cancel</button>
    <div class="block_images_zone">
      <draggable v-model="files" group="image" class="flex" >
          <div class="block_card_image" v-for="item in files" :key="item.dataURL">
            <hsc-menu-style-white>
              <hsc-menu-context-menu>
                <div class="box" style="padding: 1em;">
                  <img  :src="item.dataURL" alt="">
                </div>
                <template slot="contextmenu">
                  <hsc-menu-item label="MenuItem 1" />
                  <hsc-menu-item label="MenuItem 2" />
                  <hsc-menu-item label="MenuItem 2">
                    <hsc-menu-item label="MenuItem 4" />
                    <hsc-menu-item label="MenuItem 5" />
                  </hsc-menu-item>
                </template>
              </hsc-menu-context-menu>
            </hsc-menu-style-white>
          </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import draggable from 'vuedraggable'

export default {
  name: "drop-zone",
  components: {
    vueDropzone: vue2Dropzone,
    draggable,

  },
  data() {
    return {
      files: [],
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        previewTemplate: this.template(),
      },
    }
  },
  methods: {
    allImages() {
      this.files = this.$refs.myVueDropzone.getAcceptedFiles()
    },
    deleteImages() {
      this.$refs.myVueDropzone.removeAllFiles(true)
      this.files = this.$refs.myVueDropzone.getAcceptedFiles()
    },
    template: function () {
      return `<div class="dz-preview dz-file-preview">
                <div class="dz-image">
                    <div data-dz-thumbnail-bg></div>
                </div>
                <div class="dz-details">
                </div>
                <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                <div class="dz-success-mark"><i class="fa fa-check"></i></div>
                <div class="dz-error-mark"><i class="fa fa-close"></i></div>
            </div>
        `;
    },
  },
}
</script>

<style scoped>
.flex{
  display: flex;
  flex-wrap:wrap;
}
.block-name{
  background-color: #deccff;
  border: 2px solid #985EFF;
  font-size: 25px;
  text-align: center;
  margin: 25px;
  width: 350px;
  height: 50px;
}
.block_images_zone{
  max-height: 600px;
  min-height: 200px;
  border: 2px solid #985EFF;
  margin-top: 10px;
  overflow: auto;
  padding: 20px;
}

.block_card_image{
  height: 250px;
  width: 370px;
  margin: 15px 30px;
  flex: 0 1 25%;
  overflow: hidden;
}
img{
  height: 100%;
  width: 100%;
  object-fit: contain;

}
.dropzone-custom-content{
  width: 100%;
  height: 200px;
  border: 2px dashed #985EFF;
  border-radius: 10px;
  text-align: center;
}
.dropzone-custom-title{
  margin-top: 50px;
}
</style>