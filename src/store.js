import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imagelist: {},
    list: {}
  },
  mutations: {
    ok(state, payload) {
      state.imagelist = payload.jsonName.data.message;
    },
    list(state, payload) {
      state.list = payload.jsonAll.data.message;
    }
  },
  actions: {
    searchapi({ commit }, payload) {
      axios
        .get("https://dog.ceo/api/breed/" + payload + "/images")
        .then(jsonName => {
          commit("ok", {
            jsonName
          });
        });
    },
    getlist({ commit }) {
      axios.get("https://dog.ceo/api/breeds/list/all").then(jsonAll => {
        commit("list", { jsonAll });
      });
    }
  },
  getters: {
    click(state) {
      return state.click;
    },
    imagelist(state) {
      return state.imagelist;
    },
    list(state) {
      return state.list;
    }
  }
});
