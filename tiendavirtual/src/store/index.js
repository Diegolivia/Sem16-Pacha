import Vue from "vue";
import Vuex from "vuex";
import MainPage from "@/components/HelloWorld.vue";
import Users from "@/components/Users.vue";
import Album from "@/components/Album.vue";
import Posts from "@/components/Posts.vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    CurrPage: MainPage,
  },
  mutations: {
    ChangePage(state, newPage) {
      switch (newPage) {
        case 0:
          this.state.CurrPage = MainPage;
          break;
        case 1:
          this.state.CurrPage = Users;
          break;
        case 2:
          this.state.CurrPage = Posts;
          break;
        case 3:
          this.state.CurrPage = Album;
          break;
      }
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
