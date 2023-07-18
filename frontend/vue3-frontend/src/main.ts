import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import navbar from './components/navbar.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import './index.css'
import { createStore } from 'vuex'

const store = createStore({
  state: {
    accessToken: '',
    username: ''
  },
  mutations: {
    SET_ACCESS_TOKEN(state, token) {
      state.accessToken = token
    },
    SET_USERNAME(state, username) {
      state.username = username
    }
  },
  actions: {
    setAccessToken({ commit }, token) {
      commit('SET_ACCESS_TOKEN', token)
    },
    setUsername({ commit }, username) {
      commit('SET_USERNAME', username)
    }
  },
  getters: {
    accessToken: state => state.accessToken,
    username: state => state.username
  }
})

const app = createApp(App)
app.component('VueDatePicker', VueDatePicker);
app.component('navbar', navbar);

app.use(router)
app.use(store)
app.mount('#app')
