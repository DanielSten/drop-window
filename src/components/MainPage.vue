<template>
  <div class="container">
    <tab-btn :class="{active: isTabActive(0)}" @click="onTabClick(0)">Gallery 1</tab-btn>
    <tab-btn :class="{active: isTabActive(1)}" @click="onTabClick(1)">Gallery 2</tab-btn>
    <div class="tabs_body">
      <div class="tab_body" v-show="isTabActive(0)">
        <gallery-one></gallery-one>
      </div>
      <div class="tab_body" v-show="isTabActive(1)">
        <gallery-two></gallery-two>
      </div>
    </div>
  </div>
</template>

<script>
import tabBtn from "@/components/galleries/tab-btn";
import galleryOne from "@/components/galleries/gallery-one";
import galleryTwo from "@/components/galleries/gallery-two";

export default {
  name: "MainPage",
  components: {
    tabBtn,
    galleryOne,
    galleryTwo

  },
  data() {
    return{
      tabActive: 0,
    }
  },
  methods: {
    isTabActive(num){
      return this.tabActive === num;
    },
    onTabClick(num){
      this.tabActive = num;
    }
  },
}
</script>

<style scoped>

.container {
  margin: 24px auto;
  max-width: 800px;
}
.tabs_body{
  margin-top: 25px;
}

</style>