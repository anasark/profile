import { createStore } from "vuex";

const store = createStore({
  state: {
    dark_mode: false,
  },

  getters: {
    darkMode(state) {
      return state.dark_mode;
    },
  },

  mutations: {
    setDarkMode(state, value) {
      state.dark_mode = value === "true";
    },
    toggleDarkMode(state) {
      state.dark_mode = !state.dark_mode;
    },
  },
});

export default store;
