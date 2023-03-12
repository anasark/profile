import { createStore } from "vuex";
import axios from "axios"

const store = createStore({
  state: {
    dark_mode: false,
    profile: [],
    portfolio: [],
    resume: [],
    blog: []
  },

  getters: {
    darkMode(state) {
      return state.dark_mode
    },
    getProfile(state) {
      return state.profile
    },
    getPortfolio(state) {
      return state.portfolio
    },
    getResume(state) {
      return state.resume
    },
    getBlog(state) {
      return state.blog
    }
  },

  mutations: {
    setDarkMode(state, value) {
      state.dark_mode = value === "true"
    },
    toggleDarkMode(state) {
      state.dark_mode = !state.dark_mode
    },
    setProfile(state, items) {
      state.profile = items
    },
    setPortfolio(state, items) {
      state.portfolio = items
    },
    setResume(state, items) {
      state.resume = items
    },
    setBlog(state, items) {
      state.blog = items
    }
  },

  actions: {
    async fetchProfile({ commit }) {
      const profile = await getData('profile') 
      commit('setProfile', profile)
    },
    async fetchPortfolio({ commit }) {
      const portfolio = await getData('portfolio') 
      commit('setPortfolio', portfolio)
    },
    async fetchResume({ commit }) {
      const resume = await getData('resume') 
      commit('setResume', resume)
    },
    async fetchBlog({ commit }) {
      const blog = await getData('blog') 
      commit('setBlog', blog)
    },
  },
});

export default store;

async function getData(file) {
  const fullUrl = location.protocol + '//' + location.host + '/data/' + file + '.json'; 
  let json = ''

  try {
      const data = await axios.get(fullUrl)
      json = data.data
    }
    catch (error) {
      alert(error)
      console.log(error)
  }

  return json
}
