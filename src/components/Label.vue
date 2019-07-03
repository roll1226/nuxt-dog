<template>
  <div class="label">
    <label
      v-for="(item, i) in list"
      :key="i"
      @change="searchapi()"
      id="labelWrap"
    >
      <input v-model="dogname" :value="i" type="radio" />
      <div class="wrap">
        {{ i }}
      </div>
    </label>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dogname: "",
      loadimage: ""
    };
  },
  mounted() {
    this.$store.dispatch("getlist");
  },
  methods: {
    searchapi() {
      this.$store.commit("resetImages");
      this.$store.commit("setLoading", true);
      this.$store.dispatch("searchapi", this.dogname);
    }
  },
  computed: {
    ...mapGetters(["list"])
  }
};
</script>

<style lang="scss" scoped>
input[type="radio"] {
  display: none; /* ラジオボタンを非表示にする */
}
.wrap {
  display: block; /* ブロックレベル要素化する */
  float: left; /* 要素の左寄せ・回り込を指定する */
  margin: 5px; /* ボックス外側の余白を指定する */
  width: 150px; /* ボックスの横幅を指定する */
  height: 45px; /* ボックスの高さを指定する */
  padding-left: 5px; /* ボックス内左側の余白を指定する */
  padding-right: 5px; /* ボックス内御右側の余白を指定する */
  color: #b20000; /* フォントの色を指定 */
  text-align: center; /* テキストのセンタリングを指定する */
  line-height: 45px; /* 行の高さを指定する */
  cursor: pointer; /* マウスカーソルの形（リンクカーソル）を指定する */
  border: 2px solid #006dd9; /* ボックスの境界線を実線で指定する */
  border-radius: 5px; /* 角丸を指定する */
}
input[type="radio"]:checked + .wrap {
  background: #31a9ee; /* マウス選択時の背景色を指定する */
  color: #ffffff; /* マウス選択時のフォント色を指定する */
}
.clickClass {
  background: #006dd9;
  color: #fff;
}
</style>
