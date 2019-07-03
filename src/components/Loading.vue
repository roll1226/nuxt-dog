<template>
  <div v-show="$store.getters.loading" class="laodingWrap">
    <div class="loading"></div>
  </div>
</template>

<style scoped>
@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.loading {
  display: block;
  width: 250px;
  height: 250px;
  border: solid 20px #eee;
  border-left: solid 20px rgba(0, 0, 0, 0);
  transform-origin: center center;
  animation: loading 1s linear 0s forwards infinite;
  border-radius: 60%;
}
.laodingWrap {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>
