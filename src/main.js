
import 'babel-polyfill'
import {createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router/index.js'
import App from './App.vue'
import './index.css' 
createApp(App).use(router).use(VueAxios, axios).mount('#app')
