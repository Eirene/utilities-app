import { createStore } from "vuex";

import alert from "./alert";
import notify from "./notify";
import trello from "./trello";
import todo from "./todo";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    alert,
    notify,
    trello,
    todo,
  },
});
