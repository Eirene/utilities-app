import { createStore } from "vuex";

import notify from "./notify";
import trello from "./trello";
import todo from "./todo";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    notify,
    trello,
    todo,
  },
});
