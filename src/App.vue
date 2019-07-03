<template>
  <div class="dog">
    <Loading />
    <Label />
    <Images />
  </div>
</template>

<script>
import Label from "@/components/Label";
import Images from "@/components/Images";
import Loading from "@/components/Loading";

export default {
  components: {
    Label,
    Images,
    Loading
  }
};
</script>
