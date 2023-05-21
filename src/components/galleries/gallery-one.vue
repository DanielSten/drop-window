<template>
  <div class="block_gallery_one">
    <drop-zone></drop-zone>
  </div>

</template>

<script>
import dropZone from "@/components/galleries/drop-zone";

export default {
  name: "gallery-one",
  components: {
    dropZone,
  },

}
</script>

<style scoped>
.block_gallery_one{
  width: 100%;
  height: 800px;
}


</style>