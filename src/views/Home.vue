<template>
  <div class="home">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

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
  width: 100px;
  height: 100px;
  border: solid 5px #11f;
  border-bottom: transparent;
  border-left: transparent;
  transform-origin: center center;
  animation: loading 1s linear 0s forwards infinite;
  border-radius: 60%;
}
</style>
