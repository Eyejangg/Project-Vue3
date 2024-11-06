import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // นำเข้า Router
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './tailwind.css';

createApp(App).mount('#app');

createApp(App).use(router).mount('#app');