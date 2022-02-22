import { createStore } from "vuex";

import notify from "./notify";
import trello from "./trello";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    notify,
    trello,
  },
});
