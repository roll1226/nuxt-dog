<template>
  <div class="image">
    <div v-for="imageUrl in imagelist" :key="imageUrl" class="imageWrap">
      <img :src="imageUrl" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["imagelist"])
  }
};
</script>

<style lang="scss" scoped>
.image {
  margin: 0 auto;
  width: 1500px;
}
.imageWrap {
  margin-bottom: 5%;
  margin-right: 5%;
  float: left;
  img {
    display: block;
    width: 300px;
  }
}
</style>
