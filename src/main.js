import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto';
import "@/assets/tailwind.css";
import 'aos/dist/aos.css'
import animated from 'animate.css'
import jQuery from 'jquery'
import './assets/tailwind.css'

window.$ = window.jQuery = jQuery


createApp(App).use(store).use(router).use(VueScrollTo).use(animated).mount('#app')
