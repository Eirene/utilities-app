let defaults = {
  time: 2000,
  delay: 0,
  text: '',
  type: 'blue',
};

export default {
  namespaced: true,

  state: {
    alert: {
      isOpen: false,
      text: null,
      type: null,
    }
  },

  getters: {
    getAlert(state) {
      return state.alert;
    },
  },

  mutations: {
    SET_ALERT(state, options) {
      state.alert.isOpen = true;
      state.alert.type = options.type;
      state.alert.text = options.text;
    },
    CLOSE_ALERT(state) {
      state.alert.isOpen = false;
      state.alert.type = null;
      state.alert.text = null;
    },
  },

  actions: {
    setAlert({ commit }, options) {
      options = { ...defaults, ...options };

      setTimeout(() => {
        commit('SET_ALERT', options);

        setTimeout(() => {
          commit('CLOSE_ALERT', null);
        }, options.time);
      }, options.delay);
    },

    closeAlert({ commit }){
      commit('CLOSE_ALERT', null);
    }
  },
};
