let defaults = {
  time: 2000,
  delay: 0,
  text: '',
  type: 'blue',
};

export default {
  namespaced: true,

  state: {
    alert: null,
    text: null,
    type: null,
  },

  getters: {
    getAlert(state) {
      return state.alert;
    },
    getAlertType(state) {
      return state.type;
    },
    getAlertText(state) {
      return state.text;
    },
  },

  mutations: {
    SET_ALERT(state, text) {
      state.alert = text;
    },
    SET_ALERT_TYPE(state, text) {
      state.type = text;
    },
    SET_ALERT_TEXT(state, text) {
      state.text = text;
    },
  },

  actions: {
    setAlert({ commit }, options) {
      options = { ...defaults, ...options };

      setTimeout(() => {
        commit('SET_ALERT', options.text);
        commit('SET_ALERT_TEXT', options.text);
        commit('SET_ALERT_TYPE', options.type);

        setTimeout(() => {
          commit('SET_ALERT', null);
        }, options.time);
      }, options.delay);
    },
  },
};
