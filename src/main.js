
import 'babel-polyfill'
import {createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router/index.js'
import store from '../store/index.js'
import App from './App.vue'
import './index.css'
createApp(App).use(VueAxios,axios).use(router).mount('#app')
